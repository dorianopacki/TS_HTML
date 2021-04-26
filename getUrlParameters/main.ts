function getUrlParameters(url) {
  const searchParams = new URLSearchParams(url);

  const keys = [...searchParams.keys()];

  ??
  const result = keys.reduce((acc, av) => {
    acc[av] = searchParams.get(av);
    return acc;
  }, {});

  return result;
}

const a = getUrlParameters("page=10&id=1");

const params = {
  page:10,
  id:1,
  entries:[10,100]
}


// array[0]=1&array[1]=2....
// array=1&array=2