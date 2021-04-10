function directUserToUrl(url, delay) {
    setTimeout(function () {
        window.location.href = url;
    }, delay);
    console.log("Href delayed by " + delay + "ms");
}
function handleChangeUrl(e) {
    var href = e.target.getAttribute("data-delayed-href");
    var delay = e.target.getAttribute("data-delayed-duration");
    directUserToUrl(href, delay);
}
var aTags = document.querySelectorAll("a");
aTags.forEach(function (tag) { return tag.addEventListener("click", handleChangeUrl); });
