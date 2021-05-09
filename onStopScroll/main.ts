let timer: number;

const throttle = (fn: Function, delay: number) => {
  let last = 0;
  return (...args: Array<any>) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

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
  }, 1100);
};

window.addEventListener("scroll", throttle(manageScrollState, 1000));
