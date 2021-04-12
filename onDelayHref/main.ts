function directUserToUrl(url: string, delay: number) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
  console.log(`Href delayed by ${delay}ms`);
}

function handleChangeUrl(e) {
  e.preventDefault();
  const href = e.target.getAttribute("data-delayed-href");
  // if(typeof href !== "string") throw new Error("Link has to be a string");
  const delay = e.target.getAttribute("data-delayed-duration");
  // if(typeof delay !== "number") throw new Error("Delay has to be a string");

  if (href && delay) directUserToUrl(href, delay);
  else
    throw new Error(
      "Both data-delayed-href and data-delayed-duration has to be provided"
    );
}

const aTags = document.querySelectorAll("a");
aTags.forEach((tag) => tag.addEventListener("click", handleChangeUrl));
