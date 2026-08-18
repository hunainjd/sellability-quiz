// src/components/ProgressBar.jsx
import "./ProgressBar.css";

/**
 * Ledger-style progress indicator: a thin track with a tick mark for every
 * step (15 questions + 1 bonus) and a gold fill line that advances as the
 * user progresses. Reads as a ruler/ledger rather than a generic rounded
 * progress bar -- intentional nod to the "Established Legacy" brand.
 *
 * @param {number} progress - 0-100
 * @param {number} totalSteps - total tick count (16 in this quiz)
 * @param {number} currentStep - 1-based index of the active tick
 * @param {string} label - e.g. "Question 4 of 15" or "One last thing"
 */
export default function ProgressBar({ progress, totalSteps, currentStep, label }) {
  const ticks = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress__label">{label}</div>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${progress}%` }} />
        <div className="progress__ticks">
          {ticks.map((tick) => (
            <span
              key={tick}
              className={
                "progress__tick" + (tick <= currentStep ? " progress__tick--done" : "")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}