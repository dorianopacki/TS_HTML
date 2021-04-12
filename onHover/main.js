var hoverElements = document.querySelectorAll(".zoomOnHover");
var createHoverElement = function () {
    console.log("Created element");
    var zoomElement = document.createElement("div");
    zoomElement.classList.add("zoomElement");
    document.body.appendChild(zoomElement);
    //to set in styles as class or whatever
    zoomElement.style.backgroundImage = "url(./cm997hae_2.png)";
    zoomElement.style.backgroundRepeat = "no-repeat";
    zoomElement.style.backgroundSize = "200%";
    //dynamicly should be changing depending on x and y axis move over image
};
var removeHoverElement = function () {
    console.log("Removed element");
    document.body.querySelector(".zoomElement").remove();
};
var moveOverHoverElement = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var elm = document.querySelector(".zoomElement");
    elm.style.backgroundPosition = x + "% " + y + "%";
};
// Listening on events
hoverElements.forEach(function (element) {
    return element.addEventListener("mouseover", createHoverElement);
});
hoverElements.forEach(function (element) {
    return element.addEventListener("mouseout", removeHoverElement);
});
hoverElements.forEach(function (element) {
    return element.addEventListener("mousemove", moveOverHoverElement);
});
