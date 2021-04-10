function directUserToUrl(url, delay) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
  console.log(`Href delayed by ${delay}ms`);
}

function handleChangeUrl(e) {
  const href = e.target.getAttribute("data-delayed-href");
  const delay = e.target.getAttribute("data-delayed-duration");

  directUserToUrl(href, delay);
}

const aTags = document.querySelectorAll("a");
aTags.forEach((tag) => tag.addEventListener("click", handleChangeUrl));
