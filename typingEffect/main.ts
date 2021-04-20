import { Validator } from "./validator";

type animationType = "word" | "letter";

interface ITyping {
  element: string;
  delay: number;
  type: animationType;
  animateTyping: () => void;
}

class Typing implements ITyping {
  public element: string;
  public delay: number;
  public type: animationType;

  constructor(
    element: string,
    delay: number = 500,
    type: animationType = "letter"
  ) {
    if (Validator.isValidElement(element)) throw new Error("Invalid Element");
    this.element = element;
    if (Validator.isValiDelay(delay)) throw new Error("Invalid delay");
    this.delay = delay;
    if (Validator.isValidType(type)) throw new Error("Invalid type");
    this.type = type;
  }

  animateTyping() {
    const elementToAnimate: Element = document.querySelector(this.element);
    const contentToAnimate = elementToAnimate.textContent;
    let text: Array<string> = [];

    if (this.type === "letter") text = contentToAnimate.split("");
    if (this.type === "word") text = contentToAnimate.split(" ");

    elementToAnimate.textContent = "";
    let interval: number;
    let index: number = 0;

    elementToAnimate.insertAdjacentHTML("afterend", `<p class="cursor">|</p>`);

    const cursor = document.querySelector<HTMLElement>(".cursor");
    cursor.style.opacity = "0";

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

const test = new Typing(".animate").animateTyping();
