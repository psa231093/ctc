"use client";
import { useState } from "react";
import { programs } from "@/lib/ctc";
import { Arrow, Photo } from "./ctc-ui";
export function TrainingSelector() {
  const [active, setActive] = useState(0);
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
            className={`training-option ${index === active ? "active" : ""}`}
            key={program.id}
          >
            <button
              aria-expanded={index === active}
              aria-controls={`program-${program.id}`}
              onClick={() => setActive(index)}
            >
              <span className="mono">{program.number}</span>
              <span>{program.label}</span>
              <span aria-hidden="true">{index === active ? "−" : "+"}</span>
            </button>
            <div
              id={`program-${program.id}`}
              hidden={index !== active}
              className="program-panel"
            >
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
          </div>
        ))}
      </div>
    </div>
  );
}
