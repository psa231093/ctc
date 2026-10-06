import type { ReactNode } from "react";

// Keeping the inner content mounted lets CSS animate its natural height both ways.
// Inert immediately removes collapsed links and controls from keyboard navigation.
export function AccordionPanel({ open, id, labelledBy, children }: {
  open: boolean;
  id: string;
  labelledBy: string;
  children: ReactNode;
}) {
  return (
    <div id={id} role="region" aria-labelledby={labelledBy} aria-hidden={!open}
      inert={!open} className="accordion-panel" data-open={open}>
      <div className="accordion-panel-clip">{children}</div>
    </div>
  );
}
