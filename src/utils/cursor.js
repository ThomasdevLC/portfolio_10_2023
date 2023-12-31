export function initCursorEffects(location) {
  let mouseCursor = document.querySelector(".cursor");
  let menuTitles = document.querySelectorAll(".menu__item__name");
  let blurElements = document.querySelectorAll(".blur,.project__table__td__link");

  const cursor = (e) => {
    if (e.pageX >= window.innerWidth - 10 || e.pageY >= window.innerHeight - 10 || window.innerWidth < 1200) {
      mouseCursor.style.display = "none";
    } else {
      mouseCursor.style.display = "block";
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    }
  };

  window.addEventListener("mousemove", cursor);

  menuTitles.forEach((title) => {
    title.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    });
    title.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    });
  });
  if (location.pathname !== "/") {
    mouseCursor.classList.remove("link-grow");
  }

  blurElements.forEach((element) => {
    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("blur-cursor");
    });
    element.addEventListener("mouseover", () => {
      mouseCursor.classList.add("blur-cursor");
    });
  });

  return () => {
    mouseCursor.classList.remove("blur-cursor");
  };
}
