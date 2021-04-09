function getUrlParameters(url) {
  const searchParams = new URLSearchParams(url);

  const keys = [...searchParams.keys()];

  const result = keys.reduce((acc, av) => {
    acc[av] = searchParams.get(av);
    return acc;
  }, {});

  return result;
}

const a = getUrlParameters("page=10&id=1");
