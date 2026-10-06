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
    let frame = 0;
    const update = () => {
      frame = 0;
      kinetic.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) /
              (window.innerHeight + rect.height),
          ),
        );
        element.style.setProperty("--section-progress", progress.toFixed(4));
      });
    };
    const onScroll = () => {
      if (!frame && !media.matches) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
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
