function directUserToUrl(url, delay) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
  console.log(`Href delayed by ${delay}ms`);
}

function handleChangeUrl(e) {
  e.preventDefault();
  const href = e.target.getAttribute("data-delayed-href");
  const delay = e.target.getAttribute("data-delayed-duration");

  if (href && delay) directUserToUrl(href, delay);
  else
    throw new Error(
      "Both data-delayed-href and data-delayed-duration has to be provided"
    );
}

const aTags = document.querySelectorAll("a");
aTags.forEach((tag) => tag.addEventListener("click", handleChangeUrl));
