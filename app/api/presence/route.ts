import { getCache } from "@vercel/functions";

export const dynamic = "force-dynamic";

const ACTIVE_FOR_MS = 45_000;
const CACHE_TTL_SECONDS = 60;
const MAX_PARTICIPANTS = 24;
const CACHE_KEY = "active-visitors";

type StoredParticipant = {
  sessionId: string;
  name: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  lastSeen: number;
};

const adjectives = ["Bright", "Calm", "Curious", "Kind", "Quiet", "Swift", "Warm", "Wild"];
const nouns = ["Badger", "Falcon", "Fox", "Lynx", "Otter", "Panda", "Raven", "Wolf"];

function parseCoordinate(value: string | null, min: number, max: number, fallback: number) {
  const coordinate = Number(value);

  if (!Number.isFinite(coordinate) || coordinate < min || coordinate > max) {
    return fallback;
  }

  // Country-scale accuracy is enough for the globe and avoids retaining city-level coordinates.
  return Math.round(coordinate * 2) / 2;
}

function getCountry(request: Request) {
  const rawCode = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const countryCode = rawCode && /^[A-Z]{2}$/.test(rawCode) ? rawCode : "SK";
  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

  return {
    countryCode,
    country: displayNames.of(countryCode) ?? "Slovakia",
  };
}

function getIdentity(sessionId: string) {
  const hash = [...sessionId].reduce((value, character) => ((value * 31) + character.charCodeAt(0)) >>> 0, 7);
  return {
    id: hash.toString(36),
    name: `${adjectives[hash % adjectives.length]} ${nouns[Math.floor(hash / adjectives.length) % nouns.length]}`,
  };
}

function isParticipant(value: unknown): value is StoredParticipant {
  if (!value || typeof value !== "object") return false;
  const participant = value as Partial<StoredParticipant>;

  return typeof participant.sessionId === "string"
    && typeof participant.name === "string"
    && typeof participant.country === "string"
    && typeof participant.countryCode === "string"
    && typeof participant.latitude === "number"
    && typeof participant.longitude === "number"
    && typeof participant.lastSeen === "number";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { sessionId?: unknown } | null;
  const sessionId = typeof body?.sessionId === "string" ? body.sessionId : "";

  if (!/^[a-zA-Z0-9-]{16,80}$/.test(sessionId)) {
    return Response.json({ error: "Invalid anonymous session." }, { status: 400 });
  }

  const now = Date.now();
  const cache = getCache({ namespace: "portfolio-presence" });
  const cached = await cache.get(CACHE_KEY).catch(() => null);
  const active = Array.isArray(cached)
    ? cached.filter(isParticipant).filter((participant) => now - participant.lastSeen < ACTIVE_FOR_MS)
    : [];
  const { country, countryCode } = getCountry(request);
  const identity = getIdentity(sessionId);
  const participant: StoredParticipant = {
    sessionId,
    name: identity.name,
    country,
    countryCode,
    latitude: parseCoordinate(request.headers.get("x-vercel-ip-latitude"), -90, 90, 48.5),
    longitude: parseCoordinate(request.headers.get("x-vercel-ip-longitude"), -180, 180, 19.5),
    lastSeen: now,
  };
  const roster = [participant, ...active.filter((item) => item.sessionId !== sessionId)]
    .slice(0, MAX_PARTICIPANTS);

  await cache.set(CACHE_KEY, roster, {
    ttl: CACHE_TTL_SECONDS,
    tags: ["portfolio-presence"],
    name: "Anonymous active visitors",
  }).catch(() => undefined);

  return Response.json(
    {
      self: { name: participant.name, country: participant.country },
      participants: roster.map(({ sessionId: participantSessionId, name, country: participantCountry, countryCode: participantCountryCode, latitude, longitude }) => ({
        id: getIdentity(participantSessionId).id,
        name,
        country: participantCountry,
        countryCode: participantCountryCode,
        latitude,
        longitude,
      })),
    },
    { headers: { "Cache-Control": "private, no-store, max-age=0" } },
  );
}
