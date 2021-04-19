"use strict";
exports.__esModule = true;
var validator_1 = require("./validator");
var Typing = /** @class */ (function () {
    function Typing(element, delay, type) {
        if (delay === void 0) { delay = 500; }
        if (type === void 0) { type = "letter"; }
        if (validator_1.Validator.isValidElement(element))
            throw new Error("Invalid Element");
        this.element = element;
        if (validator_1.Validator.isValiDelay(delay))
            throw new Error("Invalid delay");
        this.delay = delay;
        if (validator_1.Validator.isValidType(type))
            throw new Error("Invalid type");
        this.type = type;
    }
    Typing.prototype.animateTyping = function () {
        var elementToAnimate = document.querySelector(this.element);
        var contentToAnimate = elementToAnimate.textContent;
        var text = [];
        if (this.type === "letter")
            text = contentToAnimate.split("");
        if (this.type === "word")
            text = contentToAnimate.split(" ");
        elementToAnimate.textContent = "";
        var interval;
        var index = 0;
        elementToAnimate.insertAdjacentHTML("afterend", "<p class=\"cursor\">|</p>");
        var cursor = document.querySelector(".cursor");
        cursor.style.opacity = "0";
        interval = setInterval(function () {
            if (index >= text.length - 1)
                clearInterval(interval);
            elementToAnimate.textContent = elementToAnimate.textContent + text[index];
            index++;
        }, this.delay);
        setInterval(function () {
            cursor.style.opacity = "1";
        }, 500);
        setInterval(function () {
            cursor.style.opacity = "0";
        }, 1000);
    };
    return Typing;
}());
var test = new Typing(".animate").animateTyping();
