// src/components/ResultsScreen/ResultsScreen.jsx
import { maxScore } from "../../data/questions.js";
import EmailGate from "../EmailGate/EmailGate";
import "./ResultsScreen.css";

export default function ResultsScreen({ rawScore, resultTier, onEmailSubmit, onEmailSkip, submissionStatus }) {
  return (
    <div className="results-screen">
      <div className="results-screen__eyebrow">Your Results</div>

      <div className="results-screen__score">
        <span className="results-screen__score-number">{rawScore}</span>
        <span className="results-screen__score-max">/ {maxScore}</span>
      </div>

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