// src/components/ScoreMeter/ScoreMeter.jsx
import "./ScoreMeter.css";

/**
 * Horizontal gauge with three risk zones (red/amber/green) and a marker
 * showing where the score falls. `percentage` is 0-100.
 */
export default function ScoreMeter({ percentage }) {
  return (
    <div className="score-meter">
      <div className="score-meter__track">
        <div
          className="score-meter__marker"
          style={{ left: `${percentage}%` }}
          aria-hidden="true"
        />
      </div>
      <div className="score-meter__labels">
        <span>High Risk</span>
        <span>Buyer Ready</span>
      </div>
    </div>
  );
}