var hoverElements = document.querySelectorAll(".zoomOnHover");
var createHoverElement = function () {
    var zoomElement = document.createElement("div");
    zoomElement.classList.add("zoomElement");
    document.body.appendChild(zoomElement);
    zoomElement.style.backgroundImage = "url(./cm997hae_2.png)";
};
var removeHoverElement = function () {
    document.body.querySelector(".zoomElement").remove();
};
var moveOverHoverElement = function (event) {
    var elm = document.querySelector(".zoomElement");
    var rect = event.target.getBoundingClientRect();
    var x = ((event.clientX - rect.left) / rect.width) * 100;
    var y = ((event.clientY - rect.top) / rect.height) * 100;
    elm.style.backgroundPosition = x + "% " + y + "%";
};
hoverElements.forEach(function (element) {
    return element.addEventListener("mouseover", createHoverElement);
});
hoverElements.forEach(function (element) {
    return element.addEventListener("mouseout", removeHoverElement);
});
hoverElements.forEach(function (element) {
    return element.addEventListener("mousemove", moveOverHoverElement);
});
