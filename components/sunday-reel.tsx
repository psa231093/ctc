"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, Label } from "./ctc-ui";
import { club } from "@/lib/ctc";

export function SundayReel() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (started) video.current?.play().catch(() => {});
  }, [started]);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) element.pause();
    });
    const pauseWhenHidden = () => { if (document.hidden) element.pause(); };
    observer.observe(element);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", pauseWhenHidden); };
  }, []);

  return (
    <section className="sunday-section section-pad" aria-labelledby="sunday-heading">
      <div className="sunday-layout">
      <div className="sunday-copy">
        <Label>Behind the session / Oak Street Beach</Label>
        <h2 id="sunday-heading">FIRST, WE<br /><span className="outline-text">BUILD THE</span><br />PLAYGROUND.</h2>
        <p className="sunday-deck">The session starts before the first rep.</p>
        <p>Every Sunday, the team brings the bars to Oak Street Beach. Unload. Assemble. Train together. Take a look at the work—and the people—behind a CTC beach session.</p>
        <ol className="sunday-steps" aria-label="From setup to session">
          <li><span className="mono">01</span> Bring the bars.</li>
          <li><span className="mono">02</span> Build the space.</li>
          <li><span className="mono">03</span> Make it a session.</li>
        </ol>
        <a href={club.instagram} target="_blank" rel="noopener noreferrer" className="text-link">Check the next session <Arrow diagonal /><span className="sr-only"> (Instagram, opens in a new tab)</span></a>
      </div>
      <figure className="sunday-film" data-reveal>
        <div className="sunday-video-frame">
          <video ref={video} src={started ? "/video/sunday-at-oak-street.mp4" : undefined} poster="/images/sunday-reel-poster.webp" controls={started} playsInline preload="none" aria-label="Setting up the bars and training at Oak Street Beach" aria-describedby="sunday-caption" onLoadedData={() => { if (started) video.current?.play().catch(() => {}); }} />
          {!started && <button className="sunday-play" onClick={() => setStarted(true)} aria-label="Play Sunday setup reel"><span className="sunday-play-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span><span className="mono">WATCH THE SUNDAY RITUAL<br />01:06</span></button>}
          {started && <a className="sunday-video-fallback" href="/video/sunday-at-oak-street.mp4" target="_blank" rel="noopener noreferrer">Open reel<span className="sr-only"> in a new tab</span></a>}
        </div>
        <figcaption id="sunday-caption"><span className="mono">THE SUNDAY RITUAL</span><span>From loading the bars to a session on the sand.</span></figcaption>
      </figure>
      </div>
    </section>
  );
}
