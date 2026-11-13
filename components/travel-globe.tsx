"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function TravelGlobe() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="aspect-square w-full bg-background sm:aspect-[16/10] xl:aspect-square">
      {mounted ? (
        <iframe
          src={`https://globealbum.com/embed/matejbendik?theme=${theme}`}
          title="Matej Bendík’s travel photos on GlobeAlbum"
          className="block h-full w-full border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
    </div>
  );
}
