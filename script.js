const locationContainers = document.querySelectorAll(
  "body > main > .location-container"
);

const containerTitles = document.querySelectorAll(
  "body > main > .location-container > .location-title"
);

const headerLogo = document.querySelector("body > header > #the-24-logo-black");

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

headerLogo.addEventListener("click", () => {
  locationContainers.forEach((locationContainer) => {
    locationContainer.classList.remove("open");
  });
});
