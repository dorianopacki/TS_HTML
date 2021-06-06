const getUrlParameters = (url) => {
    const isUrlValid = new URL(url);
    const queryString = url.split("?")[1];
    const searchParameters = new URLSearchParams(queryString);
    const parametersEntries = [...searchParameters.entries()];
    const separatedParameters = parametersEntries.reduce((params, [key, value]) => {
        params[key] = value;
        return params;
    }, {});
    return separatedParameters;
};
const a = getUrlParameters("https://reqres.in/api/users?page=2");
console.log(a);
//figure out how to get work out arrays in get
// check if url is proper
