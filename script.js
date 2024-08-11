const locationContainers = document.querySelectorAll(
  "body > main > .location-container"
);

const containerTitles = document.querySelectorAll(
  "body > main > .location-container > .location-title"
);

containerTitles.forEach((containerTitle) => {
  containerTitle.addEventListener("click", () => {
    locationContainers.forEach((locationContainer) => {
      if (locationContainer.id === containerTitle.dataset.id) {
        if (locationContainer.classList.contains("open")) {
          locationContainer.classList.remove("open");
        } else {
          locationContainer.classList.add("open");
        }
      } else {
        locationContainer.classList.remove("open");
      }
    });
  });
});
