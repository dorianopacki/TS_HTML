var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function getUrlParameters(url) {
    var searchParams = new URLSearchParams(url);
    var keys = __spreadArray([], searchParams.keys());
    var result = keys.reduce(function (acc, av) {
        acc[av] = searchParams.get(av);
        return acc;
    }, {});
    return result;
}
var a = getUrlParameters("page=10&id=1");
