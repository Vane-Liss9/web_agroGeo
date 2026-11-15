
import { useTranslation } from "react-i18next";
import FlipInfoCard from "../components/FlipInfoCard";
import AppStepCard from "../components/AppStepCard";

export default function ComoFunciona() {
  const { t } = useTranslation();

  return (
    <>

      {/* CÓMO SE OBTIENE UNA ROTACIÓN */}
      <section className="rotation-section">
        <div className="container">

          <div className="rotation-heading">
            <span className="section-kicker">
              {t("howItWorks.rotation.kicker")}
            </span>

            <h2>{t("howItWorks.rotation.title")}</h2>

            <p>{t("howItWorks.rotation.description")}</p>
          </div>

          <div className="rotation-cards">

            <FlipInfoCard
              number="01"
              title={t("howItWorks.rotation.cards.climate.title")}
              frontText={t("howItWorks.rotation.cards.climate.front")}
              backTitle={t("howItWorks.rotation.cards.backTitle")}
              backText={t("howItWorks.rotation.cards.climate.back")}
              icon="☀️"
            />

            <FlipInfoCard
              number="02"
              title={t("howItWorks.rotation.cards.soil.title")}
              frontText={t("howItWorks.rotation.cards.soil.front")}
              backTitle={t("howItWorks.rotation.cards.backTitle")}
              backText={t("howItWorks.rotation.cards.soil.back")}
              icon="🌱"
            />

            <FlipInfoCard
              number="03"
              title={t("howItWorks.rotation.cards.crops.title")}
              frontText={t("howItWorks.rotation.cards.crops.front")}
              backTitle={t("howItWorks.rotation.cards.backTitle")}
              backText={t("howItWorks.rotation.cards.crops.back")}
              icon="🌾"
            />

          </div>

          <div className="rotation-result">
            <span className="result-icon">↗</span>
            <p>
              <strong>{t("howItWorks.rotation.resultLabel")}</strong>{" "}
              {t("howItWorks.rotation.result")}
            </p>
          </div>

        </div>
      </section>

      {/* CÓMO UTILIZAR LA APLICACIÓN */}
      <section className="intro-strip">

        <div className="container">

          <div className="app-steps-heading">

            <span className="section-kicker">
              {t("howItWorks.app.kicker")}
            </span>

            <h2>{t("howItWorks.app.title")}</h2>

            <p>{t("howItWorks.app.description")}</p>

          </div>

          <div className="app-steps-grid">

            <AppStepCard
              number="01"
              title={t("howItWorks.app.steps.register.title")}
              image="/imagenes/paso1.jpeg"
              alt={t("howItWorks.app.steps.register.alt")}
              description={t("howItWorks.app.steps.register.description")}
            />

            <AppStepCard
              number="02"
              title={t("howItWorks.app.steps.conditions.title")}
              image="/imagenes/paso2.jpeg"
              alt={t("howItWorks.app.steps.conditions.alt")}
              description={t("howItWorks.app.steps.conditions.description")}
            />

            <AppStepCard
              number="03"
              title={t("howItWorks.app.steps.explore.title")}
              image="/imagenes/paso3.jpeg"
              alt={t("howItWorks.app.steps.explore.alt")}
              description={t("howItWorks.app.steps.explore.description")}
            />

            <AppStepCard
              number="04"
              title={t("howItWorks.app.steps.save.title")}
              image="/imagenes/paso4.jpeg"
              alt={t("howItWorks.app.steps.save.alt")}
              description={t("howItWorks.app.steps.save.description")}
            />

          </div>

        </div>
      </section>

    </>
  );
}
