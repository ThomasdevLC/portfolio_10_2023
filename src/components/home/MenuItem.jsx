/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
const MenuItem = ({ project, index, imageWrapperRef, menuItemsRef }) => {
  return (
    <div className="menu__item">
      <div className="menu__item_image_wrapper" ref={(el) => (imageWrapperRef.current[index] = el)}>
        <img className="menu__item_image_inner" src={project.image} alt={project.title} />
      </div>
      <NavLink to={`/${project.link}/${project.id}`}>
        <p className="menu__item__name" ref={(el) => (menuItemsRef.current[index] = el)}>
          {project.title}
        </p>
      </NavLink>
      <div className="menu__item__tag">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="menu__item__tag__name">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
