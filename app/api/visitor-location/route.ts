export const dynamic = "force-dynamic";

function parseCoordinate(value: string | null, min: number, max: number) {
  if (!value) return null;
  const coordinate = Number(value);
  return Number.isFinite(coordinate) && coordinate >= min && coordinate <= max
    ? coordinate
    : null;
}

export function GET(request: Request) {
  const latitude = parseCoordinate(request.headers.get("x-vercel-ip-latitude"), -90, 90);
  const longitude = parseCoordinate(request.headers.get("x-vercel-ip-longitude"), -180, 180);
  const encodedCity = request.headers.get("x-vercel-ip-city");
  let city: string | null = null;

  if (encodedCity) {
    try {
      city = decodeURIComponent(encodedCity).slice(0, 80);
    } catch {
      city = encodedCity.slice(0, 80);
    }
  }

  return Response.json(
    {
      city,
      country: request.headers.get("x-vercel-ip-country")?.slice(0, 2) ?? null,
      latitude,
      longitude,
    },
    {
      headers: {
        "Cache-Control": "private, no-store, max-age=0",
      },
    },
  );
}
