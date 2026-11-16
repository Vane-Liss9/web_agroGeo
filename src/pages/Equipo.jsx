
import { useTranslation } from "react-i18next";

function Equipo() {
  const { t } = useTranslation();

const integrantes = [
    {
      id: 1,
      nombre: "Jhon Jairo Salcedo Jaimes",
      foto: "/imagenes/integrante4.jpeg"
    },
    {
      id: 2,
      nombre: "William Harley Castillo Jaimes",
      foto: "/imagenes/integrante5.jpeg"
    },
    {
      id: 3,
      nombre: "Gabriel Augusto Ortega Martínez",
      foto: "/imagenes/integrante2.jpeg"
    },
    {
      id: 4,
      nombre: "Jose Miguel Orejarena Correa",
      foto: "/imagenes/integrante1.jpeg"
    },
    {
      id: 5,
      nombre: "Vanessa Lisseth Arias Contreras",
      foto: "/imagenes/integrante3.jpeg"
    },
    {
      id: 6,
      nombre: "Juan David Bejarano Cortes",
      foto: "/imagenes/integrante6.jpeg"
    }
  ];
  return (
    <main className="team-page">

      {/* PRESENTACIÓN DEL PROYECTO */}
      <section className="team-intro">
        <div className="container">

          <span className="section-kicker">
            {t("team.intro.kicker")}
          </span>

          <h1>
            {t("team.intro.title")}
            <span> AgroGeo.</span>
          </h1>

          <div className="team-intro-content">
            <p>{t("team.intro.paragraph1")}</p>

            <p>{t("team.intro.paragraph2")}</p>

            <p>{t("team.intro.paragraph3")}</p>
          </div>

        </div>
      </section>

      {/* INTEGRANTES */}
      <section className="team-members">
        <div className="container">

          <div className="team-members-heading">
            <span className="section-kicker">
              {t("team.members.kicker")}
            </span>

            <h2>
              {t("team.members.title")}
            </h2>

            <p>
              {t("team.members.description")}
            </p>
          </div>

          <div className="team-grid">
            {integrantes.map((integrante) => (
              <article className="team-card" key={integrante.id}>

                <div className="team-photo">
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                  />
                </div>
                <div className="team-card-info">
                  <span className="team-member-number">
                    {t("team.members.memberLabel")} 0{integrante.id}
                  </span>

                  <h3>{integrante.nombre}</h3>

                  <p>{t("team.members.projectTeam")}</p>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default Equipo;
