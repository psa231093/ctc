"use client";
import { useEffect, useRef, useState } from "react";


export function ClubFilm() {
  const section = useRef<HTMLElement>(null);
  const filmDialog = useRef<HTMLDialogElement>(null);
  const fullVideo = useRef<HTMLVideoElement>(null);
  const fullTrigger = useRef<HTMLButtonElement>(null);
  const [fullOpen, setFullOpen] = useState(false);
  useEffect(() => {
    if (!fullOpen) return;
    const dialog = filmDialog.current;
    const playback = fullVideo.current;
    const previousOverflow = document.body.style.overflow;
    manuallyPaused.current = true;
    video.current?.pause();
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      playback?.pause();
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      fullTrigger.current?.focus({ preventScroll: true });
    };
  }, [fullOpen]);
  const video = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const manuallyPaused = useRef(false);
  const autoplayAllowed = useRef(false);
  const explicitPlay = useRef(false);
  const [source, setSource] = useState<string>();
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  function loadFilm() {
    setSource(
      window.matchMedia("(max-width: 700px)").matches
        ? "/video/ctc-film-720.mp4"
        : "/video/ctc-film-1280.mp4",
    );
  }
  function playFilm() {
    const element = video.current;
    if (element?.getAttribute("src")) element.play().catch(() => setPlaying(false));
  }
  function togglePlayback() {
    if (playing) {
      manuallyPaused.current = true;
      video.current?.pause();
    } else {
      manuallyPaused.current = false;
      explicitPlay.current = true;
      loadFilm();
      playFilm();
    }
  }
  useEffect(() => {
    if (source && visible.current && !manuallyPaused.current &&
        (autoplayAllowed.current || explicitPlay.current)) playFilm();
  }, [source]);

  useEffect(() => {
    const root = section.current;
    const element = video.current;
    if (!root || !element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    autoplayAllowed.current = !reduced.matches && !connection?.saveData;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches) {
        root.style.setProperty("--film-progress", "1");
        return;
      }
      const top = root.getBoundingClientRect().top;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight * 0.72 - top) / (window.innerHeight * 0.72 - 84),
        ),
      );
      root.style.setProperty("--film-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPreference = () => {
      autoplayAllowed.current = !reduced.matches && !connection?.saveData;
      if (!autoplayAllowed.current) element.pause();
      update();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        if (!entry.isIntersecting) element.pause();
        else if (autoplayAllowed.current && !manuallyPaused.current) {
          loadFilm();
          playFilm();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    const onVisibility = () => {
      if (document.hidden) element.pause();
      else if (
        visible.current &&
        autoplayAllowed.current &&
        !manuallyPaused.current
      )
        playFilm();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onPreference);
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onPreference);
    };
  }, []);

  return (
    <section
      className="film-section"
      ref={section}
      id="club-film"
      aria-labelledby="film-heading"
    >
      <div className="film-section-label section-pad">
        <span className="mono">CTC IN MOTION / 01:01</span>
        <span className="mono">
          SCROLL TO STEP INSIDE <span aria-hidden="true">↓</span>
        </span>
      </div>
      <div className="film-sticky">
        <div className="film-card">
          <video
            ref={video}
            src={source}
            poster="/images/film-poster.webp"
            muted
            playsInline
            loop
            preload="none"
            aria-label="Chicago Training Club hype film"
            aria-describedby="film-description"
            onLoadedData={() => {
              setFailed(false);
              if (
                visible.current &&
                !manuallyPaused.current &&
                (autoplayAllowed.current || explicitPlay.current)
              )
                playFilm();
            }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => {
              setFailed(true);
              setPlaying(false);
            }}
          />
          <div className="film-shade" />
          <div className="film-topline mono">
            <span>CHICAGO TRAINING CLUB</span>
            <span>THE CLUB FILM</span>
          </div>
          <div className="film-title">
            <span className="mono">LESS TALK. MORE LIVING.</span>
            <h2 id="film-heading">
              FEEL
              <br />
              THE ENERGY.
            </h2>
          </div>
          <div className="film-bottom">
            <p id="film-description">
              One minute at the bars.
              <br />A silent film of Chicago, training, and the people who make
              CTC.
            </p>
            <div className="film-controls">
              <button
                onClick={togglePlayback}
                aria-label={playing ? "Pause club film" : "Play club film"}
              >
                <svg className="playback-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">{playing ? <path d="M6 5h4v14H6zm8 0h4v14h-4z" /> : <path d="M8 5v14l11-7z" />}</svg>
                {playing ? "Pause film" : "Play film"}
              </button>
              <button ref={fullTrigger} className="full-film-trigger" onClick={() => { loadFilm(); setFullOpen(true); }} aria-haspopup="dialog">
                <span className="mono">Full film</span>
              </button>
            </div>
          </div>
          {failed && (
            <p className="film-error" role="status">
              The film couldn’t load.{" "}
              <button onClick={() => { loadFilm(); setFullOpen(true); }}>Try the full film player.</button>
            </p>
          )}
        </div>
      </div>
      <dialog className="full-film-dialog" ref={filmDialog} aria-labelledby="full-film-title" onCancel={() => setFullOpen(false)} onClose={() => setFullOpen(false)}>
        <div className="full-film-toolbar">
          <span id="full-film-title" className="mono">CTC / THE CLUB FILM</span>
          <button autoFocus onClick={() => setFullOpen(false)}>Close film <span aria-hidden="true">&times;</span></button>
        </div>
        {fullOpen && <video ref={fullVideo} src={fullOpen ? source : undefined} controls playsInline preload="none" poster="/images/film-poster.webp" aria-label="Full Chicago Training Club film" onLoadedData={() => { if (fullOpen) fullVideo.current?.play().catch(() => {}); }} />}
        <p className="mono">ONE MINUTE AT THE BARS. <button onClick={() => setFullOpen(false)}>Back to the website</button></p>
      </dialog>
    </section>
  );
}
