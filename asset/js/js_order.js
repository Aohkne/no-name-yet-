document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const itemContainer = section.querySelector(".item-container");
    const buttonLeft = section.querySelector(".button-left");
    const buttonRight = section.querySelector(".button-right");

    const itemWidth = 50 * 10; // Assuming 25rem for item width and 1rem = 16px

    buttonLeft.addEventListener("click", function (event) {
      event.preventDefault();
      itemContainer.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    });

    buttonRight.addEventListener("click", function (event) {
      event.preventDefault();
      itemContainer.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    });
  });
});
