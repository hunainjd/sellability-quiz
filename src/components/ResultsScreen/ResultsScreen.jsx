// src/components/ResultsScreen/ResultsScreen.jsx
import { maxScore } from "../../data/questions";
import EmailGate from "../EmailGate/EmailGate";
import ScoreMeter from "../ScoreMeter/ScoreMeter";
import "./ResultsScreen.css";

export default function ResultsScreen({ rawScore, resultTier, onEmailSubmit, onEmailSkip, submissionStatus }) {
  const displayScore = Math.round((rawScore / maxScore) * 10);
  const percentage = Math.round((rawScore / maxScore) * 100);

  return (
    <div className="results-screen">
      <div className="results-screen__eyebrow">Your Results</div>

      <div className="results-screen__score">
        <span className="results-screen__score-number">{displayScore}</span>
        <span className="results-screen__score-max">/ 10</span>
      </div>

      <ScoreMeter percentage={percentage} />

      <h2 className="results-screen__tier">{resultTier.label}</h2>
      <p className="results-screen__text">{resultTier.text}</p>

      <EmailGate
        onSubmit={onEmailSubmit}
        onSkip={onEmailSkip}
        status={submissionStatus}
      />
    </div>
  );
}