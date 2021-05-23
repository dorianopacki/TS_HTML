var ProgressReadingBar = /** @class */ (function () {
    function ProgressReadingBar(element) {
        this.element = element;
    }
    ProgressReadingBar.prototype.createProgressBar = function () {
        var elementToObserve = document.querySelector("." + this.element);
        var observer = new IntersectionObserver(function (entries) {
            console.log(entries[0].target);
        });
        observer.observe(elementToObserve);
    };
    return ProgressReadingBar;
}());
var progressbar = new ProgressReadingBar("with-progress-bar");
progressbar.createProgressBar();
