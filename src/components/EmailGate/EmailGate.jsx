
// src/components/EmailGate.jsx
import { useState } from "react";
import "./EmailGate.css";

/**
 * Sits below the results. Optional -- the user can submit an email to get
 * their results sent / be connected with a consultant, or skip entirely.
 * Either way, onSkip/onSubmit both trigger the parent's "record this
 * submission" logic (see App.jsx), since we want every completion stored,
 * with or without an email.
 */
export default function EmailGate({ onSubmit, onSkip, status }) {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail) return;
    onSubmit(email);
  }

  if (status === "submitted") {
    return (
      <div className="email-gate email-gate--done">
        <p className="email-gate__confirmation">
          Thanks -- your results are on their way, and a consultant will follow up shortly.
        </p>
      </div>
    );
  }

  if (status === "skipped") {
    return (
      <div className="email-gate email-gate--done">
        <p className="email-gate__confirmation">No problem -- thanks for taking the assessment.</p>
      </div>
    );
  }

  return (
    <div className="email-gate">
      <h3 className="email-gate__heading">Want a copy of your results?</h3>
      <p className="email-gate__body">
        Enter your email to receive your score and talk to a consultant about next steps.
      </p>
      <form className="email-gate__form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className="email-gate__input"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={touched && !isValidEmail}
          aria-label="Email address"
        />
        {touched && !isValidEmail && (
          <div className="email-gate__error">Enter a valid email address.</div>
        )}
        <button type="submit" className="email-gate__submit">
          Send my results
        </button>
      </form>
      <button type="button" className="email-gate__skip" onClick={onSkip}>
        No thanks, I'm done
      </button>
    </div>
  );
}