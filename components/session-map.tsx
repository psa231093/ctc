"use client";
import { useEffect, useRef, useState } from "react";
export function SessionMap({ place, query }: { place: string; query: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setActive(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
    }, { rootMargin: "300px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [query]);
  return <div ref={root} className="session-map">
    {!loaded && <div className="session-map-placeholder"><span>Map of {place}</span><span className="mono">{active ? "LOADING GOOGLE MAPS" : "EXPLORE THE TRAINING GROUND"}</span></div>}
    {active && <iframe title={`Google Map: ${place}`} src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`} loading="eager" referrerPolicy="no-referrer-when-downgrade" allowFullScreen onLoad={() => setLoaded(true)} />}
  </div>;
}
