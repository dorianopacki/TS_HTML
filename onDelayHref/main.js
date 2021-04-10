function directUserToUrl(url, delay) {
    setTimeout(function () {
        window.location.href = url;
    }, delay);
    console.log("Href delayed by " + delay + "ms");
}
function handleChangeUrl(e) {
    e.preventDefault();
    var href = e.target.getAttribute("data-delayed-href");
    var delay = e.target.getAttribute("data-delayed-duration");
    if (href && delay)
        directUserToUrl(href, delay);
    else
        throw new Error("Both data-delayed-href and data-delayed-duration has to be provided");
}
var aTags = document.querySelectorAll("a");
aTags.forEach(function (tag) { return tag.addEventListener("click", handleChangeUrl); });
