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
    tagsRef.current = tagsRef.current.map((item) => item);

    menuItems.current.forEach((menu, index) => {
      menu.addEventListener("mouseenter", () => handleMouseEnter(index));
      menu.addEventListener("mouseleave", () => handleMouseLeave(index));
    });
  });

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 1200) {
      const parentRight = menuItems.current[index].getBoundingClientRect().right;
      const wrapperWidth = imageWrapper.current[index].getBoundingClientRect().width;

      gsap.set(imageWrapper.current[index], {
        scale: 0.4,
        rotation: -20,
        yPercent: 0,
        x: parentRight - wrapperWidth + 100,
      });

      gsap.to(imageWrapper.current[index], { opacity: 1, scale: 0.65, yPercent: -60, rotation: 2 });
      gsap.to(tagsRef.current[index], { opacity: 1, duration: 0.3 });
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth > 1200) {
      gsap.to(imageWrapper.current[index], {
        opacity: 0,
        yPercent: -10,
        scale: 0.4,
        rotation: -15,
      });
      gsap.to(tagsRef.current[index], { opacity: 0, duration: 0.3 });
    }
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
