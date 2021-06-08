class ProgressReadingBarObserver {
  private elementToObserve = document.querySelector(".with-progress-bar") as HTMLElement;
  private progressObserverOptions: {threshold: Array<number>}

  constructor(progressObserverOptions: {threshold: Array<number>}) {
    this.progressObserverOptions
  }

  private createProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress__top");
    progressBar.classList.add("progress");
    document.body.appendChild(progressBar);
  }

  private changeProgressBarSize(ratio) {
    const progressBarElement = document.querySelector(".progress") as HTMLElement
    const percentageOfScrolledElement = ratio.toFixed(2) * 100
    
    progressBarElement.style.width = `${percentageOfScrolledElement}%`

    console.log(percentageOfScrolledElement )
  }

  private setIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersectionRatio = entry.intersectionRatio
        this.changeProgressBarSize(intersectionRatio)
      });
    }, options);

    observer.observe(this.elementToObserve);
  }

  initializeProgressBar() {
    this.createProgressBar();
    this.setIntersectionObserver();
  }
}

const options = {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
}

const c = new ProgressReadingBarObserver(options);
c.initializeProgressBar();


