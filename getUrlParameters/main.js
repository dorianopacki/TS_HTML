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
//to implement
//function crawls through url and separates its's query string into paramteres including arrays 
function getAllUrlParams(url) {
    let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    const parametersStore = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        const queryParts = queryString.split('&');
        for (let i = 0; i < queryParts.length; i++) {
            const params = queryParts[i].split('=');
            let paramName = params[0];
            let paramValue = typeof (params[1]) === 'undefined' ? true : params[1];
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string')
                paramValue = paramValue.toLowerCase();
            //if ends with square brackets - array
            if (paramName.match(/\[(\d+)?\]$/)) {
                const key = paramName.replace(/\[(\d+)?\]/, '');
                if (!parametersStore[key])
                    parametersStore[key] = [];
                if (paramName.match(/\[\d+\]$/)) {
                    const index = /\[(\d+)\]/.exec(paramName)[1];
                    parametersStore[key][index] = paramValue;
                }
                else {
                    parametersStore[key].push(paramValue);
                }
            }
            else {
                if (!parametersStore[paramName]) {
                    parametersStore[paramName] = paramValue;
                }
                else if (parametersStore[paramName] && typeof parametersStore[paramName] === 'string') {
                    parametersStore[paramName] = [parametersStore[paramName]];
                    parametersStore[paramName].push(paramValue);
                }
                else {
                    parametersStore[paramName].push(paramValue);
                }
            }
        }
    }
    return parametersStore;
}
const sample = getAllUrlParams('http://example.com/?product=shirt&color=blue&newuser&size=m&comapnys[]=nike&comapnys[]=adidas');
//outcome
//both array and single queries
console.log(sample);
