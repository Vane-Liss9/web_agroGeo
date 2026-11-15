
import { useTranslation } from "react-i18next";

function Datos() {
  const { t } = useTranslation();

  const nasaVariables = [
    {
      codigo: "T2M",
      nombre: t("data.nasa.variables.meanTemp.name"),
      descripcion: t("data.nasa.variables.meanTemp.description")
    },
    {
      codigo: "T2M_MAX",
      nombre: t("data.nasa.variables.maxTemp.name"),
      descripcion: t("data.nasa.variables.maxTemp.description")
    },
    {
      codigo: "T2M_MIN",
      nombre: t("data.nasa.variables.minTemp.name"),
      descripcion: t("data.nasa.variables.minTemp.description")
    },
    {
      codigo: "PRECTOTCORR",
      nombre: t("data.nasa.variables.precipitation.name"),
      descripcion: t("data.nasa.variables.precipitation.description")
    },
    {
      codigo: "GWETROOT",
      nombre: t("data.nasa.variables.rootMoisture.name"),
      descripcion: t("data.nasa.variables.rootMoisture.description")
    }
  ];

  const cultivoVariables = [
    {
      grupo: t("data.crops.groups.identification.name"),
      atributos: "ScientificName · FAMNAME",
      descripcion: t("data.crops.groups.identification.description")
    },
    {
      grupo: t("data.crops.groups.characteristics.name"),
      atributos: "HABI · LIFO · CAT",
      descripcion: t("data.crops.groups.characteristics.description")
    },
    {
      grupo: t("data.crops.groups.temperature.name"),
      atributos: "TOPMN · TOPMX · TMIN · TMAX",
      descripcion: t("data.crops.groups.temperature.description")
    },
    {
      grupo: t("data.crops.groups.precipitation.name"),
      atributos: "ROPMN · ROPMX · RMIN · RMAX",
      descripcion: t("data.crops.groups.precipitation.description")
    },
    {
      grupo: t("data.crops.groups.soil.name"),
      atributos: "PHOPMN · PHOPMX · TEXT · DEP",
      descripcion: t("data.crops.groups.soil.description")
    },
    {
      grupo: t("data.crops.groups.cycle.name"),
      atributos: "GMIN · GMAX",
      descripcion: t("data.crops.groups.cycle.description")
    }
  ];

  return (
    <main className="data-page">

      {/* ENCABEZADO */}
      <section className="data-hero">
        <div className="container">
          <span className="section-kicker">
            {t("data.hero.kicker")}
          </span>

          <p>
            {t("data.hero.description")}
          </p>
        </div>
      </section>

      {/* NASA POWER */}
      <section className="data-source-section">
        <div className="container">

          <div className="data-source-heading">
            <span className="data-number">01</span>
            <div>
              <span className="section-kicker">
                {t("data.nasa.kicker")}
              </span>
              <h2>{t("data.nasa.title")}</h2>
            </div>
          </div>

          <div className="data-content-grid">

            {/* INFORMACIÓN IZQUIERDA */}
            <div className="data-explanation">
              <span className="data-label">
                {t("data.nasa.sourceLabel")}
              </span>

              <h3>{t("data.nasa.heading")}</h3>

              <p>{t("data.nasa.paragraph1")}</p>

              <p>{t("data.nasa.paragraph2")}</p>

              <div className="data-purpose">
                <span>{t("data.nasa.purposeTitle")}</span>
                <p>{t("data.nasa.purposeDescription")}</p>
              </div>

              <a
                className="data-source-link"
                href="https://power.larc.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("data.nasa.sourceLink")} <span>↗</span>
              </a>
            </div>

            {/* TABLA DERECHA */}
            <div className="data-table-container">
              <div className="data-table-heading">
                <div>
                  <span>NASA POWER</span>
                  <h3>{t("data.nasa.tableTitle")}</h3>
                </div>
                <span className="data-count">
                  {t("data.nasa.variableCount")}
                </span>
              </div>

              <div className="data-table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>{t("data.nasa.tableColumn1")}</th>
                      <th>{t("data.nasa.tableColumn2")}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {nasaVariables.map((variable) => (
                      <tr key={variable.codigo}>
                        <td>
                          <strong>{variable.nombre}</strong>
                          <code>{variable.codigo}</code>
                        </td>
                        <td>{variable.descripcion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CSV DE CULTIVOS */}
      <section className="data-source-section crop-data-section">
        <div className="container">

          <div className="data-source-heading">
            <span className="data-number">02</span>
            <div>
              <span className="section-kicker">
                {t("data.crops.kicker")}
              </span>
              <h2>{t("data.crops.title")}</h2>
            </div>
          </div>

          <div className="data-content-grid">

            {/* INFORMACIÓN IZQUIERDA */}
            <div className="data-explanation">
              <span className="data-label">
                {t("data.crops.sourceLabel")}
              </span>

              <h3>{t("data.crops.heading")}</h3>

              <p>{t("data.crops.paragraph1")}</p>

              <p>{t("data.crops.paragraph2")}</p>

              <div className="data-purpose">
                <span>{t("data.crops.purposeTitle")}</span>
                <p>{t("data.crops.purposeDescription")}</p>
              </div>

              <a
                className="data-source-link"
                href="https://www.fao.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("data.crops.sourceLink")} <span>↗</span>
              </a>
            </div>

            {/* TABLA DERECHA */}
            <div className="data-table-container">
              <div className="data-table-heading">
                <div>
                  <span>{t("data.crops.fileLabel")}</span>
                  <h3>{t("data.crops.tableTitle")}</h3>
                </div>
                <span className="data-count">
                  {t("data.crops.groupCount")}
                </span>
              </div>

              <div className="data-table-scroll">
                <table className="data-table crop-data-table">
                  <thead>
                    <tr>
                      <th>{t("data.crops.tableColumn1")}</th>
                      <th>{t("data.crops.tableColumn2")}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cultivoVariables.map((variable) => (
                      <tr key={variable.grupo}>
                        <td>
                          <strong>{variable.grupo}</strong>
                        </td>
                        <td>
                          <code>{variable.atributos}</code>
                          <p>{variable.descripcion}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Datos;
