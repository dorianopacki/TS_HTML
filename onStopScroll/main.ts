let timer: number;

const manageScrollState = () => {
  if (document.body.classList.contains("not-scrolling")) {
    document.body.classList.remove("not-scrolling");
    document.body.classList.add("scrolling");
  } else {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    document.body.classList.remove("scrolling");
    document.body.classList.add("not-scrolling");
  }, 500);
};

// throttle / debounce

window.addEventListener("scroll", manageScrollState);
