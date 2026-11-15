import { useState } from "react";
export default function AppStepCard({
  number,
  title,
  image,
  alt,
  description
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`app-step-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      aria-label={`${title}. ${flipped ? "Volver a la captura" : "Ver explicación"}`}
      aria-pressed={flipped}
    >
      <span className="app-step-inner">

        <span className="app-step-face app-step-front">

          <span className="app-step-number">{number}</span>

          <span className="app-step-image-container">
            <img
              src={image}
              alt={alt}
              className="app-step-image"
            />
          </span>

          <span className="app-step-hint">
            Ver explicación <span>↻</span>
          </span>

        </span>

        <span className="app-step-face app-step-back">

          <span className="app-step-number">{number}</span>
          <span className="app-step-back-icon">✓</span>
          <span className="app-step-title">{title}</span>

          <span className="app-step-description">
            {description}
          </span>

          <span className="app-step-hint">
            Volver a la captura <span>↻</span>
          </span>

        </span>

      </span>
    </button>
  );
}