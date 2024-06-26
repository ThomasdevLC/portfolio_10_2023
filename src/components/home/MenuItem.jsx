/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import { NavLink } from "react-router-dom";
const MenuItem = ({ project, index }) => {
  const { gsap } = window;
  const menuItems = useRef([]);
  const imageWrapper = useRef([]);
  const tagsRef = useRef([]);

  useEffect(() => {
    menuItems.current = menuItems.current.map((item) => item);
    imageWrapper.current = imageWrapper.current.map((item) => item);

    menuItems.current.forEach((menu, index) => {
      menu.addEventListener("mouseenter", () => handleMouseEnter(index));
      menu.addEventListener("mouseleave", () => handleMouseLeave(index));
    });
  });

  const handleMouseEnter = (index) => {
    gsap.set(imageWrapper.current[index], {
      scale: 0.8,
      rotation: -5,
    });

    gsap.to(imageWrapper.current[index], { opacity: 1, scale: 1, yPercent: 0, rotation: 3 });
    gsap.to(tagsRef.current[index], { opacity: 1 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageWrapper.current[index], {
      opacity: 0,
      rotation: -3,
      scale: 0.8,
    });
    gsap.to(tagsRef.current[index], { opacity: 0 });
  };

  return (
    <div className="menu__item">
      <NavLink to={`/${project.link}/${project.id}`}>
        <p className="menu__item__name" ref={(el) => (menuItems.current[index] = el)}>
          {project.title}
        </p>
      </NavLink>
      <div className="menu__item__tag" ref={(el) => (tagsRef.current[index] = el)}>
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="menu__item__tag__name">
            {tag}
          </span>
        ))}
      </div>
      <div className="menu__item__image__wrapper" ref={(el) => (imageWrapper.current[index] = el)}>
        <img className="menu__item__image__inner" src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

export default MenuItem;
