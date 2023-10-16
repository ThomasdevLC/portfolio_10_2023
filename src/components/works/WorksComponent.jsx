import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import worklistFr from "../../worklist/worklistData";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = worklistFr.find((w) => w.id === projectId);
    setProject(selectedProject);
  }, [projectId]);

  return (
    <section className="container">
      {project ? (
        <>
          <h1 className="container__title">
            <span className="container__title__span">{project.title}</span>
          </h1>
          <div className="project">
            <p className="project__intro">{project.intro}</p>
            <p className="project__pitch">{project.pitch}</p>

            <div className="project__table">
              <table>
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th className="project__table__th">STACK</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{project.period}</td>
                    <td className="project__table__td">
                      <ul>
                        {project.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="project__table__td__link">
                      <div>
                        <a href={project.url} target="_blank" rel="noreferrer">
                          {project.url}
                        </a>
                      </div>
                      <div>
                        <a href={project.url2} target="_blank" rel="noreferrer">
                          {project.url2}
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default WorksComponent;
