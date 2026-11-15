
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../components/ArrowIcon";

export default function Inicio() {
  const { t } = useTranslation();

  return (
    <section className="hero">

      <div className="hero-image" />
      <div className="hero-shade" />

      <div className="container hero-content">

        <div className="hero-copy">

          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {t("home.eyebrow")}
          </span>

          <h1>
            {t("home.title")}
            <em> {t("home.highlight")}</em>
          </h1>

          <p className="hero-description">
            {t("home.description")}
          </p>

          <div className="hero-actions">

            <a
              className="button button-primary"
              href="/app/app-release.apk"
              download="AgroGeo.apk"
            >
              {t("home.download")} <ArrowIcon />
            </a>

            <Link className="button button-ghost" to="/desarrollo">
              {t("home.project")}
            </Link>

          </div>

          <div className="hero-note">
            <span className="note-line" />
            {t("home.note")}
          </div>

        </div>

      </div>

      <Link className="scroll-cue" to="/como-funciona">
        <span className="scroll-cue-line" />
        {t("home.discover")}
      </Link>

    </section>
  );
}
