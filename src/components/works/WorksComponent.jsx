import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LangContext } from "../../context/LangContext";
import git from "../../assets/images/git.png";

import worklistFr from "../../worklist/worklistData";
import worklistEn from "../../worklist/worklistDataEn";
import BackArrow from "../../utils/BackArrow";
import WorksTitle from "./WorksTitle";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const { switchLang } = useContext(LangContext);
  const [project, setProject] = useState(null);
  const [linkOne, setLinkOne] = useState(null);
  const [linkTwo, setLinkTwo] = useState(null);

  useEffect(() => {
    const selectedProject = (switchLang === "fr" ? worklistFr : worklistEn).find((w) => w.id === projectId);
    setProject(selectedProject);
  }, [projectId, switchLang]);

  useEffect(() => {
    if (project && project.title) {
      switch (project.title) {
        case "TEAMWISE":
          setLinkOne(
              <>
                {switchLang === "fr" ? "REPO BACKEND" : "BACKEND REPO"}
                <img src={git} alt="GitHub logo" style={{width: "20px", marginLeft: "8px"}}/>
              </>
          );
          setLinkTwo(
              <>
                {switchLang === "fr" ? "REPO FRONTEND" : "FRONTEND REPO"}
                <img src={git} alt="GitHub logo" style={{ width: "20px", marginLeft: "8px" }} />
              </>
          );
          break;
        case "FERME DE LA ROUGERAIE":
          setLinkOne(switchLang === "fr" ? "VISITER SITE 🔗" : "VISIT SITE 🔗 ");
          setLinkTwo(switchLang === "fr" ? "VISITER SITE ADMIN 🔗" : "VISIT ADMIN SITE 🔗");
          break;
        case "GCA":
          setLinkOne(
          <>
            {switchLang === "fr" ? "REPO GITHUB" : "GITHUB REPO "}
            <img src={git} alt="GitHub logo" style={{width: "20px", marginLeft: "8px"}}/>
          </>
          );
          break;
        case "BLOG":
          setLinkOne(
              <>
                {switchLang === "fr" ? "REPO GITHUB" : "GITHUB REPO "}
                <img src={git} alt="GitHub logo" style={{width: "20px", marginLeft: "8px"}}/>
              </>
          );
          break;
        case "ASPHALT":
          setLinkOne(switchLang === "fr" ? "VISITER SITE 🔗" : "VISIT SITE 🔗 ");
          break;
        case "KASA":
          setLinkOne(switchLang === "fr" ? "VISITER SITE 🔗" : "VISIT SITE 🔗 ");
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
                            <span>{linkOne}</span>
                          </a>
                        </div>
                        <div className="project__table__td__link--btn">
                          <a href={project.url2} target="_blank" rel="noreferrer">
                            <span>{linkTwo}</span>
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
