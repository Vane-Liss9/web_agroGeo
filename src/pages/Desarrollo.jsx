
import { useTranslation } from "react-i18next";

export default function Desarrollo() {
  const { t } = useTranslation();

  const technologies = [
    {
      code: "Py",
      name: "Python",
      category: t("development.technologies.python.category"),
      description: t("development.technologies.python.description"),
    },
    {
      code: "Dj",
      name: "Django",
      category: t("development.technologies.django.category"),
      description: t("development.technologies.django.description"),
    },
    {
      code: "DB",
      name: "SQLite",
      category: t("development.technologies.sqlite.category"),
      description: t("development.technologies.sqlite.description"),
    },
    {
      code: "ETL",
      name: t("development.technologies.etl.name"),
      category: t("development.technologies.etl.category"),
      description: t("development.technologies.etl.description"),
    },
    {
      code: "GH",
      name: "GitHub",
      category: t("development.technologies.github.category"),
      description: t("development.technologies.github.description"),
    },
  ];

  return (
    <main className="development-section">
      <div className="container">

        {/* Encabezado */}
        <div className="development-heading">
          <span className="section-kicker">
            {t("development.heading.kicker")}
          </span>

          <h1>{t("development.heading.title")}</h1>

          <p>{t("development.heading.description")}</p>
        </div>

        {/* Herramientas */}
        <section className="architecture-section">
          <div className="architecture-intro">
            <div>
              <span className="section-kicker">
                {t("development.architecture.kicker")}
              </span>
              <h2>{t("development.architecture.title")}</h2>
            </div>

            <p>{t("development.architecture.description")}</p>
          </div>

          <div className="architecture-panel">
            <div className="architecture-panel-header">
              <div>
                <span className="architecture-label">
                  {t("development.architecture.label")}
                </span>
                <h3>{t("development.architecture.components")}</h3>
              </div>
              <span className="architecture-count">
                {t("development.architecture.count")}
              </span>
            </div>

            <div className="technology-list">
              {technologies.map((tech) => (
                <article className="technology-row" key={tech.name}>
                  <div className="technology-code">
                    {tech.code}
                  </div>

                  <div className="technology-info">
                    <div className="technology-title">
                      <h4>{tech.name}</h4>

                      {tech.status && (
                        <span className="technology-status">
                          {tech.status}
                        </span>
                      )}
                    </div>

                    <span className="technology-category">
                      {tech.category}
                    </span>

                    <p>{tech.description}</p>
                  </div>

                  <span className="technology-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Repositorio del proyecto */}
        <div className="repository-access">
          <div className="repository-info">
            <span className="repository-label">
              {t("development.repository.label")}
            </span>
            <h3>{t("development.repository.title")}</h3>
            <p>{t("development.repository.description")}</p>
          </div>

          <div className="repository-buttons">
            <a
              href="https://github.com/jmoc3/front_field_shift"
              target="_blank"
              rel="noopener noreferrer"
              className="repository-button"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              {t("development.repository.frontend")}
              <span>↗</span>
            </a>

            <a
              href="https://github.com/jmoc3/back_field_shift"
              target="_blank"
              rel="noopener noreferrer"
              className="repository-button"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              {t("development.repository.backend")}
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Fuente de datos externa: NASA POWER */}
        <section className="nasa-api-section">

          <div className="nasa-api-heading">
            <span className="section-kicker">
              {t("development.nasa.kicker")}
            </span>

            <h2>{t("development.nasa.title")}</h2>

            <p>{t("development.nasa.description")}</p>
          </div>

          <div className="nasa-api-card">

            <div className="nasa-api-top">
              <div className="nasa-brand">
                <span className="nasa-symbol">NASA</span>

                <div>
                  <h3>NASA POWER</h3>
                  <span>
                    Prediction Of Worldwide Energy Resources
                  </span>
                </div>
              </div>

              <span className="api-badge">
                {t("development.nasa.badge")}
              </span>
            </div>

            <div className="nasa-api-content">

              <div className="nasa-api-description">
                <h4>{t("development.nasa.providesTitle")}</h4>

                <p>{t("development.nasa.providesDescription")}</p>
              </div>

              <div className="nasa-api-description">
                <h4>{t("development.nasa.usageTitle")}</h4>

                <p>{t("development.nasa.usageDescription")}</p>
              </div>

            </div>

            <div className="api-endpoint">
              <span>{t("development.nasa.endpointLabel")}</span>

              <a
                href="https://power.larc.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="api-endpoint-link"
              >
                power.larc.nasa.gov/api/temporal/daily/point ↗
              </a>
            </div>

            <div className="nasa-api-footer">
              <span>{t("development.nasa.source")}</span>

              <a
                className="nasa-link"
                href="https://power.larc.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("development.nasa.link")} <span>↗</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
