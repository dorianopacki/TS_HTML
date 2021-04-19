"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.isValiDelay = function (value) {
        if (isNaN(value) || !isFinite(value))
            return false;
        return true;
    };
    Validator.isValidType = function (value) {
        if (value.length < 1)
            return false;
        return true;
    };
    Validator.isValidElement = function (value) {
        if (!value.includes(".") || !value.includes("#"))
            return false;
        return true;
    };
    return Validator;
}());
exports.Validator = Validator;
