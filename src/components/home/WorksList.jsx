import { useRef } from "react";
import { NavLink } from "react-router-dom";
import worklist from "../../worklist/worklistData";

const WorksList = () => {
  const menuItems = useRef(null);
  const imageWrapper = useRef(null);

  // const { gsap } = window;

  return (
    <div className="menu">
      {worklist.map((project) => {
        return (
          <div className="menu__item" ref={menuItems} key={project.id}>
            <div className="menu__item_image_wrapper" ref={imageWrapper}>
              <img className="menu__item_image_inner" src={project.image} alt={project.title} />
            </div>
            <NavLink to={`/${project.link}/${project.id}`}>
              <p className="menu__item__name">{project.title}</p>
            </NavLink>
            <div className="menu__item__tag">
              {project.tags.map((tag, index) => (
                <span key={index} className="menu__item__tag__name">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorksList;
