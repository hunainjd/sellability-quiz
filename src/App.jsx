// src/App.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuizState } from "./hooks/useQuizState";
import LandingIntro from "./components/LandingIntro/LandingIntro";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import ResultsScreen from "./components/ResultsScreen/ResultsScreen";
import "./App.css";

export default function App() {
  const quiz = useQuizState();
  // "idle" | "submitted" | "skipped" -- drives the EmailGate's confirmation state
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  function handleEmailSubmit(email) {
    const payload = quiz.buildSubmissionPayload(email);
    // TODO: once Firestore is wired up, replace this with:
    //   await addDoc(collection(db, "submissions"), { ...payload, createdAt: serverTimestamp() });
    console.log("Submission (with email) -- ready for Firestore:", payload);
    setSubmissionStatus("submitted");
  }

  function handleEmailSkip() {
    const payload = quiz.buildSubmissionPayload(null);
    // TODO: same Firestore write as above, just with email: null.
    console.log("Submission (no email) -- ready for Firestore:", payload);
    setSubmissionStatus("skipped");
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {quiz.step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <LandingIntro onStart={quiz.startQuiz} />
          </motion.div>
        )}

        {typeof quiz.step === "number" && (
          <motion.div
            key={`question-${quiz.step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={quiz.currentQuestion}
              questionNumber={quiz.step + 1}
              totalQuestions={quiz.totalQuestions}
              totalSteps={quiz.totalQuestions + 1}
              currentStep={quiz.step + 1}
              progress={quiz.progress}
              selectedChoiceIndex={quiz.answers[quiz.currentQuestion.id]}
              onSelect={(choiceIndex) => quiz.selectAnswer(quiz.currentQuestion.id, choiceIndex)}
            />
          </motion.div>
        )}

        {quiz.step === "bonus" && (
          <motion.div
            key="bonus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={quiz.bonusQuestion}
              totalQuestions={quiz.totalQuestions}
              totalSteps={quiz.totalQuestions + 1}
              currentStep={quiz.totalQuestions + 1}
              progress={quiz.progress}
              selectedChoiceIndex={quiz.bonusAnswer}
              onSelect={quiz.selectBonusAnswer}
              isBonus
            />
          </motion.div>
        )}

        {quiz.step === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ResultsScreen
              rawScore={quiz.rawScore}
              resultTier={quiz.resultTier}
              onEmailSubmit={handleEmailSubmit}
              onEmailSkip={handleEmailSkip}
              submissionStatus={submissionStatus}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}