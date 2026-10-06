"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
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
      elements.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, [path]);
  return null;
}
