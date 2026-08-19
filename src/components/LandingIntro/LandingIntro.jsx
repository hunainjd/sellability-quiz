// src/components/LandingIntro.jsx
import { landingContent } from "../../data/questions.js";
import "./LandingIntro.css";
import Wordmark_Gold from "../../assets/Wordmark_Gold.jpg";

export default function LandingIntro({ onStart }) {
  return (
    <div className="landing-intro">
      <img
        src={Wordmark_Gold}
        alt="The Established Legacy"
        className="landing-intro__logo"
      />

      <div className="landing-intro__eyebrow">Sellability Assessment</div>
      <h1 className="landing-intro__headline">{landingContent.headline}</h1>
      <p className="landing-intro__subheading">{landingContent.subheading}</p>
      <p className="landing-intro__description">{landingContent.description}</p>

      <button type="button" className="landing-intro__cta" onClick={onStart}>
        Start the Assessment
      </button>
      <div className="landing-intro__meta">Takes less than 5 minutes &middot; 15 questions</div>
    </div>
  );
}