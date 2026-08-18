// src/components/QuestionCard.jsx
import { motion } from "framer-motion";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./QuestionCard.css";

/**
 * Renders a single question "page": theme eyebrow, prompt, and choices.
 * Selecting a choice calls onSelect immediately -- the parent (useQuizState)
 * handles auto-advancing after a short delay, this component only shows
 * the local selected/pressed state for that delay.
 *
 * Reused for both scored questions and the unscored bonus question --
 * pass isBonus to swap the eyebrow label and suppress any score styling.
 */
export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  totalSteps,
  currentStep,
  progress,
  selectedChoiceIndex,
  onSelect,
  isBonus = false,
}) {
  const label = isBonus
    ? "One last thing"
    : `Question ${questionNumber} of ${totalQuestions}`;

  return (
    <div className="question-card">
      <ProgressBar
        progress={progress}
        totalSteps={totalSteps}
        currentStep={currentStep}
        label={label}
      />

      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="question-card__eyebrow">
          {isBonus ? "Before you go" : question.theme}
        </div>

        <h2 className="question-card__prompt">{question.prompt}</h2>

        <div className="question-card__choices">
          {question.choices.map((choice, index) => {
            const isSelected = selectedChoiceIndex === index;
            return (
              <button
                key={index}
                type="button"
                className={
                  "question-card__choice" +
                  (isSelected ? " question-card__choice--selected" : "")
                }
                onClick={() => onSelect(index)}
                aria-pressed={isSelected}
              >
                <span className="question-card__choice-text">{choice.text}</span>
                <span className="question-card__choice-indicator" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}