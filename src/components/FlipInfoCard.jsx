import { useState } from "react";
export default function FlipInfoCard({
  number,
  title,
  frontText,
  backTitle,
  backText,
  icon
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      aria-label={`${title}. ${flipped ? "Ver frente" : "Ver explicación"}`}
      aria-pressed={flipped}
    >
      <span className="flip-card-inner">

        <span className="flip-card-face flip-card-front">

          <span className="flip-card-top">
            <span className="flip-card-number">{number}</span>
            <span className="flip-card-icon">{icon}</span>
          </span>

          <span className="flip-card-title">{title}</span>

          <span className="flip-card-description">
            {frontText}
          </span>

          <span className="flip-card-hint">
            <span>Descubrir más</span>
            <span>↻</span>
          </span>

        </span>

        <span className="flip-card-face flip-card-back">

          <span className="flip-card-number">{number}</span>

          <span className="flip-card-title">{backTitle}</span>

          <span className="flip-card-description">
            {backText}
          </span>

          <span className="flip-card-hint">
            <span>Volver</span>
            <span>↻</span>
          </span>

        </span>

      </span>
    </button>
  );
}