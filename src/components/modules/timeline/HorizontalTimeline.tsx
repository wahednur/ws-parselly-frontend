import { CheckIcon } from "lucide-react";
import React from "react";
import "./HorizontalTimeline.css";

export type TimelineStep = "Booking" | "Shipped" | "Reached" | "Delivered";

interface HorizontalTimelineProps {
  currentStep: TimelineStep;
}

const steps: TimelineStep[] = ["Booking", "Shipped", "Reached", "Delivered"];

const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({
  currentStep,
}) => {
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="timeline-container">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={step} className="timeline-step">
            <div
              className={`circle ${isCompleted || isCurrent ? "active" : ""}`}
            >
              {isCompleted || isCurrent ? <CheckIcon fontSize="small" /> : ""}
            </div>
            <div className="label">{step}</div>
            {index < steps.length - 1 && (
              <div className={`line ${index < currentIndex ? "active" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalTimeline;
