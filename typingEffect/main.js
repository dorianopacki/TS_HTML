class Typing {
  constructor(element, delay, type) {
    this.element = element;
    this.delay = delay;
    this.type = type;
  }

  animateTyping() {
    const elementToAnimate = document.querySelector(this.element);
    let text = [];

    if (this.type === "letter") text = [...elementToAnimate.textContent];
    if (this.type === "word") text = elementToAnimate.textContent.split(" ");

    elementToAnimate.textContent = "";
    let interval;
    let index = 0;

    document
      .querySelector(this.element)
      .insertAdjacentHTML("afterend", `<p class="cursor"> |</p>`);

    const cursor = document.querySelector(".cursor");
    cursor.opacity = "0";

    interval = setInterval(() => {
      if (index >= text.length - 1) clearInterval(interval);
      elementToAnimate.textContent = elementToAnimate.textContent + text[index];
      index++;
    }, this.delay);

    setInterval(() => {
      cursor.style.opacity = "1";
    }, 500);

    setInterval(() => {
      cursor.style.opacity = "0";
    }, 1000);
  }
}

const a = new Typing(".animate", 500, "word").animateTyping();

//TODO set it all with typescript
