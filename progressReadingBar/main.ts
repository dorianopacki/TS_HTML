const divTop = document.createElement("div");
const divBottom = document.createElement("div");

divTop.classList.add("progress", "progress__top");
divBottom.classList.add("progress", "progress__bottom");

document.body.appendChild(divTop);
document.body.appendChild(divBottom);

function manageProgress() {
  const scrollPositionInPercentage = (
    (window.scrollY / window.innerHeight) *
    100
  ).toFixed();
  divTop.style.width = `${scrollPositionInPercentage}%`;
  divBottom.style.width = `${scrollPositionInPercentage}%`;
}

// Intersection Observer

window.addEventListener("scroll", manageProgress);
