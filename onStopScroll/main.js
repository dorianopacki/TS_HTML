var timer;
var manageScrollState = function () {
    if (document.body.classList.contains("not-scrolling")) {
        document.body.classList.remove("not-scrolling");
        document.body.classList.add("scrolling");
    }
    else {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        document.body.classList.remove("scrolling");
        document.body.classList.add("not-scrolling");
    }, 500);
};
window.addEventListener("scroll", manageScrollState);
