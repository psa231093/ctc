"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const kinetic = document.querySelectorAll<HTMLElement>("[data-kinetic]");
    const states = Array.from(kinetic, element => ({ element, current: 0, target: 0, initialized: false }));
    let frame = 0;
    let sampleNeeded = true;
    let lastTime = 0;
    const update = (time: number) => {
      frame = 0;
      if (media.matches) return;
      if (sampleNeeded) {
        // Read every rectangle before writing styles to avoid forced layout.
        const viewportHeight = window.innerHeight;
        const measurements = states.map(state => ({ state, rect: state.element.getBoundingClientRect() }));
        for (const { state, rect } of measurements) {
          state.target = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
          if (!state.initialized) { state.current = state.target; state.initialized = true; }
        }
        sampleNeeded = false;
      }
      const elapsed = lastTime ? Math.min(time - lastTime, 50) : 16;
      lastTime = time;
      const blend = 1 - Math.exp(-elapsed / 85);
      let settling = false;
      for (const state of states) {
        const difference = state.target - state.current;
        if (Math.abs(difference) > 0.0001) {
          state.current += difference * blend;
          settling = true;
        } else state.current = state.target;
        state.element.style.setProperty("--section-progress", state.current.toFixed(5));
      }
      if (settling) frame = requestAnimationFrame(update);
      else lastTime = 0;
    };
    const onScroll = () => {
      sampleNeeded = true;
      if (!frame && !media.matches) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    frame = requestAnimationFrame(update);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9)
        el.classList.add("will-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      elements.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, [path]);
  return null;
}
