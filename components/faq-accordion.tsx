"use client";

import { useState } from "react";
import { faqs } from "@/lib/ctc";
import { AccordionPanel } from "./accordion-panel";

export function FaqAccordion() {
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());
  function toggle(index: number) {
    setExpanded(current => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }
  return <div className="faq-list">
    {faqs.map((faq, index) => {
      const open = expanded.has(index);
      return <div className="faq-item" key={faq.question}>
        <h3><button className="faq-trigger" id={`faq-trigger-${index}`} aria-expanded={open}
          aria-controls={`faq-panel-${index}`} onClick={() => toggle(index)}>
          {faq.question}<span className="accordion-icon" aria-hidden="true" />
        </button></h3>
        <AccordionPanel open={open} id={`faq-panel-${index}`} labelledBy={`faq-trigger-${index}`}>
          <p>{faq.answer}</p>
        </AccordionPanel>
      </div>;
    })}
  </div>;
}
