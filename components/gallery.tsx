"use client";
import { useEffect, useRef, useState } from "react";
import { photos } from "@/lib/ctc";
import { Arrow, Photo } from "./ctc-ui";
export function Gallery({ full = false }: { full?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selected === null) {
      dialog.current?.close();
      return;
    }
    if (!dialog.current?.open) dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  const move = (direction: number) =>
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + photos.length) % photos.length,
    );
  return (
    <>
      <div className={full ? "gallery-grid" : "gallery-strip"} ref={scroller}>
        {(full ? photos : photos.slice(0, 5)).map((photo, i) => (
          <figure key={photo.image}>
            <button
              className="gallery-photo"
              onClick={() => setSelected(i)}
              aria-label={`Open photograph: ${photo.caption}`}
            >
              <Photo
                name={photo.image}
                alt={photo.alt}
                sizes={
                  full
                    ? "(max-width: 700px) 90vw, 33vw"
                    : "(max-width: 700px) 75vw, 30vw"
                }
              />
              <span className="photo-open" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </button>
            <figcaption>
              <span className="mono tiny">
                {String(i + 1).padStart(2, "0")} / {photo.tag}
              </span>
              <span>{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {!full && (
        <div className="gallery-controls">
          <span className="mono tiny">REAL PEOPLE. REAL PROGRESS.</span>
          <div>
            <button
              aria-label="Scroll photographs left"
              onClick={() =>
                scroller.current?.scrollBy({
                  left: -400,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "instant"
                    : "smooth",
                })
              }
            >
              <Arrow className="reverse" />
            </button>
            <button
              aria-label="Scroll photographs right"
              onClick={() =>
                scroller.current?.scrollBy({
                  left: 400,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "instant"
                    : "smooth",
                })
              }
            >
              <Arrow />
            </button>
          </div>
        </div>
      )}
      <dialog
        className="lightbox"
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
        aria-label="CTC community photo gallery"
      >
        <button
          className="lightbox-close"
          onClick={() => setSelected(null)}
          aria-label="Close photograph"
          autoFocus
        >
          Close ×
        </button>
        {selected !== null && (
          <div className="lightbox-content">
            <Photo
              name={photos[selected].image}
              alt={photos[selected].alt}
              priority
              sizes="(max-width: 700px) 95vw, 70vw"
            />
            <div className="lightbox-caption">
              <button aria-label="Previous photograph" onClick={() => move(-1)}>
                <Arrow className="reverse" />
              </button>
              <p>
                {photos[selected].caption}
                <span className="mono tiny">
                  {selected + 1} / {photos.length}
                </span>
              </p>
              <button aria-label="Next photograph" onClick={() => move(1)}>
                <Arrow />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
