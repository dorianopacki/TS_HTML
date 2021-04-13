const hoverElements = document.querySelectorAll(".zoomOnHover");

const createHoverElement = () => {
  const zoomElement = document.createElement("div");
  zoomElement.classList.add("zoomElement");
  document.body.appendChild(zoomElement);
  zoomElement.style.backgroundImage = "url(./cm997hae_2.png)";
};

const removeHoverElement = () => {
  document.body.querySelector(".zoomElement").remove();
};

const moveOverHoverElement = (event: any) => {
  const elm = document.querySelector<HTMLElement>(".zoomElement")!;
  const rect = event.target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  elm.style.backgroundPosition = `${x}% ${y}%`;
};

hoverElements.forEach((element) =>
  element.addEventListener("mouseover", createHoverElement)
);
hoverElements.forEach((element) =>
  element.addEventListener("mouseout", removeHoverElement)
);
hoverElements.forEach((element) =>
  element.addEventListener("mousemove", moveOverHoverElement)
);
