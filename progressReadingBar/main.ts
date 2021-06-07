class ProgressReadingBarObserver {
  private isElementVisible = false;
  private isListening = false;
  private elementToObserve = document.querySelector(
    ".with-progress-bar"
  ) as HTMLElement;

  private createProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress__top");
    progressBar.classList.add("progress");
    document.body.appendChild(progressBar);
  }

  private calculateBarLength() {
    // const winScroll =
    //   document.documentElement.scrollTop -
    //   data.target.offsetTop +
    //   document.documentElement.clientHeight;
    // const height = data.boundingClientRect.height;
    // const scrolled = (((winScroll / height) * 100) / 2).toFixed();
    // return scrolled;
  }

  private manageProgressBar(entry) {
    this.isElementVisible = entry.isIntersecting;

    if (!this.isElementVisible) {
      if (this.isListening) {
        window.removeEventListener("scroll", this.calculateBarLength);
        this.isListening = false;
      }
    }

    if (this.isElementVisible) {
      window.addEventListener("scroll", this.calculateBarLength);
      this.isListening = true;
    }
  }

  private setIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.manageProgressBar(entry);
      });
    });

    observer.observe(this.elementToObserve);
  }

  init() {
    this.createProgressBar();
    this.setIntersectionObserver();
  }
}

const c = new ProgressReadingBarObserver();
c.init();

//is the element visible atm?
//if so set event listener on scroll with throttling
//as long as it is visible keep listing for scroll and update bar length in %
// if element gets out of view than stop listening
