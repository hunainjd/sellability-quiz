// src/hooks/useQuizState.js
import { useState, useMemo } from "react";
import { questions, bonusQuestion, getResultTier } from "../data/questions";

// Step flow: "intro" -> 0..14 (question index) -> "bonus" -> "results"
export function useQuizState() {
  const [step, setStep] = useState("intro");
  const [answers, setAnswers] = useState({}); // { [questionId]: choiceIndex }
  const [bonusAnswer, setBonusAnswer] = useState(null); // choice index, not scored

  const totalQuestions = questions.length;

  // Raw score = sum of the score value for whatever choice was picked per question.
  const rawScore = useMemo(() => {
    return questions.reduce((sum, q) => {
      const choiceIndex = answers[q.id];
      if (choiceIndex === undefined) return sum;
      return sum + q.choices[choiceIndex].score;
    }, 0);
  }, [answers]);

  const resultTier = useMemo(() => getResultTier(rawScore), [rawScore]);

  function startQuiz() {
    setStep(0);
  }

  function selectAnswer(questionId, choiceIndex) {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }));
    setTimeout(() => goNextFrom(questionId), 250);
  }

  function selectBonusAnswer(choiceIndex) {
    setBonusAnswer(choiceIndex);
    setTimeout(() => setStep("results"), 250);
  }

  function goNextFrom(questionId) {
    const index = questions.findIndex((q) => q.id === questionId);
    if (index === totalQuestions - 1) {
      setStep("bonus");
    } else {
      setStep(index + 1);
    }
  }

  function goNext() {
    if (step === "intro") {
      setStep(0);
    } else if (typeof step === "number" && step < totalQuestions - 1) {
      setStep(step + 1);
    } else if (typeof step === "number" && step === totalQuestions - 1) {
      setStep("bonus");
    } else if (step === "bonus") {
      setStep("results");
    }
  }

  function goBack() {
    if (typeof step === "number" && step > 0) {
      setStep(step - 1);
    } else if (step === "bonus") {
      setStep(totalQuestions - 1);
    } else if (step === "results") {
      setStep("bonus");
    }
  }

  const currentQuestion = typeof step === "number" ? questions[step] : null;
  const isCurrentAnswered =
    step === "bonus"
      ? bonusAnswer !== null
      : currentQuestion
      ? answers[currentQuestion.id] !== undefined
      : true;

  const progress =
    typeof step === "number"
      ? Math.round(((step + 1) / (totalQuestions + 1)) * 100)
      : step === "bonus"
      ? Math.round((totalQuestions / (totalQuestions + 1)) * 100)
      : 0;

  function buildSubmissionPayload(email = null) {
    const questionResponses = questions.map((q) => {
      const choiceIndex = answers[q.id];
      const choice = choiceIndex !== undefined ? q.choices[choiceIndex] : null;
      return {
        questionId: q.id,
        theme: q.theme,
        prompt: q.prompt,
        selectedChoice: choice ? choice.text : null,
        score: choice ? choice.score : null,
      };
    });

    const bonusChoice =
      bonusAnswer !== null ? bonusQuestion.choices[bonusAnswer].text : null;

    return {
      email,
      rawScore,
      maxScore: 150,
      resultTier: resultTier.label,
      questionResponses,
      bonusResponse: bonusChoice,
    };
  }

  return {
    step,
    currentQuestion,
    bonusQuestion,
    answers,
    bonusAnswer,
    rawScore,
    resultTier,
    totalQuestions,
    progress,
    isCurrentAnswered,
    startQuiz,
    selectAnswer,
    selectBonusAnswer,
    goNext,
    goBack,
    buildSubmissionPayload,
  };
}