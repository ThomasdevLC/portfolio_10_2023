import worklist from "../../worklist/worklistData";
import { NavLink } from "react-router-dom";

const WorksList = () => {
  return (
    <div className="workslinks">
      {worklist.map((project) => {
        return (
          <NavLink to={`/${project.link}/${project.id}`} key={project.id}>
            <div className="workslinks__box">
              <p className="workslinks__box__name">{project.title}</p>
              <div className="workslinks__box__tag">
                {project.tags.map((tag, index) => (
                  <span key={index} className="workslinks__box__tag__name">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksList;
