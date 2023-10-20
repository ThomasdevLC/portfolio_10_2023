import { useRef, useEffect } from "react";
import worklist from "../../worklist/worklistData";
import MenuItem from "./MenuItem";

const WorksList = () => {
  const { gsap } = window;
  const menuItems = useRef([]);
  const imageWrapper = useRef([]);

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

  return (
    <div className="menu">
      {worklist.map((project, index) => (
        <MenuItem key={project.id} project={project} index={index} imageWrapperRef={imageWrapper} menuItemsRef={menuItems} />
      ))}
    </div>
  );
};

export default WorksList;
