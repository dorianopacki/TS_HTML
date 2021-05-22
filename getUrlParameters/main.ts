const getUrlParameters = (url: string) => {
  const queryString = url.split("?")[1];

  const searchParameters = new URLSearchParams(queryString);

  const parametersEntries = Array.from(searchParameters.entries());

  const separatedParameters = parametersEntries.reduce(
    (acc: any, curr: any) => {
      acc[curr[0]] = curr[1];
      return acc;
    },
    {}
  );

  return separatedParameters;
};

const a = getUrlParameters("url.com/post?page=10&id=1");
