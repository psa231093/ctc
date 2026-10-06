"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "./ctc-ui";
import { club } from "@/lib/ctc";
const links = [
  { href: "/the-club", label: "The club" },
  { href: "/chicago-calisthenics", label: "The training" },
  { href: "/community", label: "The people" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);
  return (
    <header className="site-header" id="top">
      <a href="/" className="brand" aria-label="Chicago Training Club home">
        <img
          src="/ctc-wordmark.svg"
          width="205"
          height="39"
          alt="Chicago Training Club"
        />
      </a>
      <button
        ref={button}
        className="menu-toggle"
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={path === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={club.store}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          The shop <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          className="nav-cta"
          href="/join"
          aria-current={path === "/join" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          Train with us <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}
