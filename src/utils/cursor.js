let mouseCursor = document.querySelector(".cursor");
let menuTitles = document.querySelectorAll(".workslinks__box__name");

const cursor = (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
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
