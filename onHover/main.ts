const hoverElements = document.querySelectorAll(".zoomOnHover");

const createHoverElement = () => {
  console.log("Created element");
  const zoomElement = document.createElement("div");
  zoomElement.classList.add("zoomElement");
  document.body.appendChild(zoomElement);
  //to set in styles as class or whatever
  zoomElement.style.backgroundImage = "url(./cm997hae_2.png)";
  zoomElement.style.backgroundRepeat = "no-repeat";
  zoomElement.style.backgroundSize = "200%";
  //dynamicly should be changing depending on x and y axis move over image
  zoomElement.style.backgroundPosition = "60% 10%";
};

const removeHoverElement = () => {
  console.log("Removed element");
  document.body.querySelector(".zoomElement").remove();
};

// Listening on events
hoverElements.forEach((element) =>
  element.addEventListener("mouseover", createHoverElement)
);
hoverElements.forEach((element) =>
  element.addEventListener("mouseout", removeHoverElement)
);
