class ProgressReadingBar {
  element: string;

  constructor(element: string) {
    this.element = element;
  }

  createProgressBar(): void {
    const elementToObserve = document.querySelector(`.${this.element}`);

    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].target);
    });

    observer.observe(elementToObserve);
  }
}

const progressbar = new ProgressReadingBar("with-progress-bar");

progressbar.createProgressBar();
