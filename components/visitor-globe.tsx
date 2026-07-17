"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { MapPin } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";

type Participant = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
};

type PresenceResponse = {
  self: { name: string; country: string };
  participants: Participant[];
};

const slovakiaMarker = { location: [48.5, 19.5] as [number, number], size: 0.075 };

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
}

export function VisitorGlobe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const pointerDelta = useRef(0);
  const markersRef = useRef([slovakiaMarker]);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { margin: "180px 0px" });
  const [presence, setPresence] = useState<PresenceResponse | null>(null);

  useEffect(() => {
    let sessionId = window.sessionStorage.getItem("portfolio-presence-id");

    if (!sessionId) {
      sessionId = window.crypto.randomUUID();
      window.sessionStorage.setItem("portfolio-presence-id", sessionId);
    }

    const controller = new AbortController();
    const heartbeat = () => {
      if (document.visibilityState === "hidden") return;

      fetch("/api/presence", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
        signal: controller.signal,
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((value: PresenceResponse | null) => {
          if (!value) return;
          markersRef.current = value.participants.length > 0
            ? value.participants.map((participant) => ({
                location: [participant.latitude, participant.longitude] as [number, number],
                size: 0.065,
              }))
            : [slovakiaMarker];
          setPresence(value);
        })
        .catch(() => undefined);
    };

    heartbeat();
    const interval = window.setInterval(heartbeat, 12_000);
    document.addEventListener("visibilitychange", heartbeat);

    return () => {
      controller.abort();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", heartbeat);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    let width = canvas.getBoundingClientRect().width;
    let phi = 0;
    const resizeObserver = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
    });
    resizeObserver.observe(canvas);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 1.25),
      width: Math.max(width, 320) * 1.25,
      height: Math.max(width, 320) * 1.25,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.15,
      mapSamples: 7_000,
      mapBrightness: 4.8,
      baseColor: [0.16, 0.16, 0.16],
      markerColor: [0.98, 0.98, 0.98],
      glowColor: [0.18, 0.18, 0.18],
      markers: markersRef.current,
    });

    let frame = 0;
    let lastFrame = 0;
    const render = (time: number) => {
      if (time - lastFrame < 32) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastFrame = time;
      if (!reducedMotion && pointerStart.current === null) phi += 0.0024;
      globe.update({
        phi: phi + pointerDelta.current,
        width: Math.max(width, 320) * 1.25,
        height: Math.max(width, 320) * 1.25,
        markers: markersRef.current,
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, [isInView, reducedMotion]);

  const visitors = presence?.participants ?? [];
  const locationLabel = presence?.self.country ?? "Slovakia";

  return (
    <div ref={sectionRef} className="relative h-full min-h-[26rem] overflow-hidden bg-black text-white">
      <div className="relative z-10 p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">Live presence</p>
        <h3 className="mt-2 max-w-72 text-3xl font-semibold tracking-tight">A small world, connected in real time.</h3>
        <p className="mt-4 max-w-72 text-sm leading-6 text-white/65">
          Anonymous country-level presence—without accounts, location prompts, or stored IP addresses.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75">
          <MapPin className="size-3" aria-hidden="true" />
          {locationLabel}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          role="img"
          tabIndex={0}
          aria-label="Interactive globe with anonymous country-level visitor markers"
          className="absolute top-[39%] right-[-28%] aspect-square w-[112%] cursor-grab opacity-0 transition-opacity duration-1000 outline-none active:cursor-grabbing focus-visible:ring-1 focus-visible:ring-white sm:top-[36%] sm:right-[-22%] sm:w-full"
          onPointerDown={(event) => {
            pointerStart.current = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (pointerStart.current !== null) pointerDelta.current = (event.clientX - pointerStart.current) / 180;
          }}
          onPointerUp={(event) => {
            pointerStart.current = null;
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              pointerDelta.current += event.key === "ArrowLeft" ? -0.15 : 0.15;
            }
          }}
        />
      </div>

      <div className="absolute right-6 bottom-6 left-6 z-10 flex items-center gap-3 sm:right-8 sm:bottom-8 sm:left-8">
        <div className="flex -space-x-2" aria-label={visitors.length > 0 ? `${visitors.length} visitors here now` : "Connecting live presence"}>
          {(visitors.length > 0 ? visitors : [{ id: "self", name: "You" }]).slice(0, 5).map((visitor) => (
            <span
              key={visitor.id}
              title={visitor.name}
              className="grid size-8 place-items-center rounded-full border border-black bg-white font-mono text-[9px] font-medium text-black"
            >
              {initials(visitor.name)}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/65">
          {visitors.length > 0 ? `${visitors.length} here now` : "Connecting…"}
        </span>
      </div>
    </div>
  );
}
