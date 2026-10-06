"use client";
import { useState } from "react";
import { programs } from "@/lib/ctc";
import { Arrow, Photo } from "./ctc-ui";
import { AccordionPanel } from "./accordion-panel";
export function TrainingSelector() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <div className="training-selector">
      <div className="training-image">
        <Photo
          key={programs[active].id}
          name={programs[active].image}
          alt={programs[active].alt}
        />
        <span className="image-label mono">CTC / {programs[active].label}</span>
        <span className="image-counter mono">0{active + 1} / 03</span>
      </div>
      <div className="training-options">
        {programs.map((program, index) => (
          <div
            className={`training-option ${index === expanded ? "active" : ""}`}
            key={program.id}
          >
            <button
              id={`program-trigger-${program.id}`}
              aria-expanded={index === expanded}
              aria-controls={`program-${program.id}`}
              onClick={() => { setExpanded(current => current === index ? null : index); setActive(index); }}
            >
              <span className="mono">{program.number}</span>
              <span>{program.label}</span>
              <span className="accordion-icon" aria-hidden="true" />
            </button>
            <AccordionPanel
              id={`program-${program.id}`}
              labelledBy={`program-trigger-${program.id}`}
              open={index === expanded}
            >
              <div className="program-panel">
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <span className="mono tiny">{program.detail}</span>
              <a
                className="text-link"
                href={`/chicago-calisthenics#${program.id}`}
              >
                Explore the training <Arrow />
              </a>
              </div>
            </AccordionPanel>
          </div>
        ))}
      </div>
    </div>
  );
}
