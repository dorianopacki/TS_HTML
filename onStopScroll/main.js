var timer;
var throttle = function (fn, delay) {
    var last = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn.apply(void 0, args);
    };
};
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
    }, 1100);
};
window.addEventListener("scroll", throttle(manageScrollState, 1000));
