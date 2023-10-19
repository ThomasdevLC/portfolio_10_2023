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
      if (project.title === "FERME LA ROUGERAIE") {
        setLink("VISITER SITE ADMIN");
      } else if (project.title === "GCA") {
        setLink("VISITER SITE 2");
      }
    }
  }, [project]);

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
                            VISITER SITE
                          </a>
                        </div>
                        <div className="project__table__td__link--btn">
                          <a href={project.url2} target="_blank" rel="noreferrer">
                            {link}
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
