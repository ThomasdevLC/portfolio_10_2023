import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LangContext } from "../../context/LangContext";
import worklistFr from "../../worklist/worklistData";
import worklistEn from "../../worklist/worklistDataEn";
import BackArrow from "../../utils/BackArrow";
import WorksTitle from "./WorksTitle";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const { switchLang } = useContext(LangContext);
  const [project, setProject] = useState(null);
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (project && project.title) {
      switch (project.title) {
        case "FERME LA ROUGERAIE":
          setLink(switchLang === "fr" ? "VISITER SITE ADMIN" : "VISIT ADMIN SITE");
          break;
        case "GCA":
          setLink(switchLang === "fr" ? "VISITER SITE 2" : "VISIT SITE 2");
          break;
        default:
      }
    }
  }, [project, switchLang]);

  useEffect(() => {
    const selectedProject = (switchLang === "fr" ? worklistFr : worklistEn).find((w) => w.id === projectId);
    setProject(selectedProject);
  }, [projectId, switchLang]);

  return (
    <>
      <section className="container">
        {project && (
          <>
            <h1 className="container__title">
              {" "}
              <WorksTitle title={project.title} />
            </h1>
            <div className="project">
              <p className="project__intro">{project.intro}</p>
              <p className="project__pitch">{project.pitch}</p>

              <div className="project__table">
                <table>
                  <thead>
                    <tr>
                      <th className="project__table__th">DATE</th>
                      <th className="project__table__th">STACK</th>
                      <th className="project__table__th">LIENS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="project__table__td">{project.period}</td>
                      <td className="project__table__td">
                        <ul>
                          {project.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="project__table__td__link">
                        <div className="project__table__td__link--btn">
                          <a href={project.url} target="_blank" rel="noreferrer">
                            {switchLang === "fr" ? <span>VISITER SITE</span> : <span>VISIT SITE</span>}
                          </a>
                        </div>
                        <div className="project__table__td__link--btn">
                          <a href={project.url2} target="_blank" rel="noreferrer">
                            <span>{link}</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </section>
      <BackArrow />
    </>
  );
};

export default WorksComponent;
