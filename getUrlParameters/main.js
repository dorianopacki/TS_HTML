var getUrlParameters = function (url) {
    var queryString = url.split("?")[1];
    var searchParameters = new URLSearchParams(queryString);
    var parametersEntries = Array.from(searchParameters.entries());
    var separatedParameters = parametersEntries.reduce(function (acc, curr) {
        acc[curr[0]] = curr[1];
        return acc;
    }, {});
    return separatedParameters;
};
var a = getUrlParameters("url.com/post?page=10&id=1");
