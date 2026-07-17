"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { MapPin } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";

type VisitorLocation = {
  city: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
};

const slovakia = { latitude: 48.72, longitude: 19.7 };

export function VisitorGlobe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const pointerDelta = useRef(0);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { margin: "180px 0px" });
  const { resolvedTheme } = useTheme();
  const [location, setLocation] = useState<VisitorLocation | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/visitor-location", { cache: "no-store", signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((value: VisitorLocation | null) => setLocation(value))
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    let width = 0;
    let phi = 0;
    const latitude = location?.latitude ?? slovakia.latitude;
    const longitude = location?.longitude ?? slovakia.longitude;
    const markerTone = resolvedTheme === "dark" ? 0.94 : 0.12;
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
      dark: resolvedTheme === "dark" ? 1 : 0,
      diffuse: 1.1,
      mapSamples: 6_000,
      mapBrightness: 4.5,
      baseColor: [0.58, 0.58, 0.58],
      markerColor: [markerTone, markerTone, markerTone],
      glowColor: [0.72, 0.72, 0.72],
      markers: [{ location: [latitude, longitude], size: 0.07 }],
    });

    let frame = 0;
    let lastFrame = 0;
    const render = (time: number) => {
      if (time - lastFrame < 32) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastFrame = time;
      if (!reducedMotion && pointerStart.current === null) phi += 0.0025;
      globe.update({
        phi: phi + pointerDelta.current,
        width: Math.max(width, 320) * 1.25,
        height: Math.max(width, 320) * 1.25,
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
  }, [isInView, location, reducedMotion, resolvedTheme]);

  const locationLabel = location?.city
    ? `${location.city}${location.country ? `, ${location.country}` : ""}`
    : "Slovakia · default marker";

  return (
    <div ref={sectionRef} className="relative h-full min-h-[24rem] overflow-hidden bg-foreground text-background">
      <div className="relative z-10 p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/55">Global presence</p>
        <h3 className="mt-2 max-w-64 text-3xl font-semibold tracking-tight">Built in Slovakia. Available anywhere.</h3>
        <p className="mt-4 max-w-72 text-sm leading-6 text-background/65">
          Your approximate city-level region is shown for this session when Vercel geolocation is available. It is never stored, and raw IP addresses are never exposed.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 border border-background/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-background/75">
          <MapPin className="size-3" aria-hidden="true" />
          {locationLabel}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        role="img"
        tabIndex={0}
        aria-label="Interactive globe with a privacy-safe approximate visitor marker"
        className="absolute top-[42%] right-[-36%] aspect-square w-[104%] cursor-grab opacity-0 transition-opacity duration-1000 outline-none active:cursor-grabbing focus-visible:ring-1 focus-visible:ring-background sm:top-[34%] sm:right-[-28%] sm:w-[78%]"
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (pointerStart.current !== null) {
            pointerDelta.current = (event.clientX - pointerStart.current) / 180;
          }
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
  );
}
