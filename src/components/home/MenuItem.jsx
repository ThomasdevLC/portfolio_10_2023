/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import { NavLink } from "react-router-dom";
const MenuItem = ({ project, index }) => {
  const { gsap } = window;
  const menuItems = useRef([]);
  const imageWrapper = useRef([]);

  useEffect(() => {
    menuItems.current = menuItems.current.map((item) => item);
    imageWrapper.current = imageWrapper.current.map((item) => item);

    menuItems.current.forEach((menu, index) => {
      menu.addEventListener("mouseenter", () => handleMouseEnter(index));
      menu.addEventListener("mouseleave", () => handleMouseLeave(index));
      //   menu.addEventListener("mousemove", () => handleMouseMove(index));
    });
  });

  const handleMouseEnter = (index) => {
    gsap.set(imageWrapper.current[index], {
      scale: 1,
      rotation: -15,
    });

    gsap.to(imageWrapper.current[index], { opacity: 1, scale: 1.2, yPercent: 0, rotation: 2 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageWrapper.current[index], {
      opacity: 0,
      yPercent: -50,
      scale: 0.8,
      rotation: -15,
    });
  };

  //   const handleMouseMove = (index) => {
  //     menuItems.current[index].addEventListener("mousemove", (event) => {
  //       const x = Math.min(500, event.clientX);
  //       const imageWrapperBounds = imageWrapper.current[index].getBoundingClientRect();
  //       const itembounds = menuItems.current[index].getBoundingClientRect();
  //       gsap.to(imageWrapper.current[index], {
  //         duration: 1.25,
  //         x: Math.abs(x - itembounds.left) - imageWrapperBounds.width / 1.55,
  //       });
  //     });
  //   };

  return (
    <div className="menu__item">
      <div className="menu__item_image_wrapper" ref={(el) => (imageWrapper.current[index] = el)}>
        <img className="menu__item_image_inner" src={project.image} alt={project.title} />
      </div>
      <NavLink to={`/${project.link}/${project.id}`}>
        <p className="menu__item__name" ref={(el) => (menuItems.current[index] = el)}>
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
