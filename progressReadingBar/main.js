const debounce = (callback, delay) => {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback();
        }, delay);
    };
};
class ProgressReadingBarObserver {
    constructor(progressObserverOptions) {
        this.elementToObserve = document.querySelector(".with-progress-bar");
        this.progressObserverOptions;
    }
    createProgressBar() {
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress__top");
        progressBar.classList.add("progress");
        document.body.appendChild(progressBar);
    }
    changeProgressBarSize(ratio) {
        const progressBarElement = document.querySelector(".progress");
        const percentageOfScrolledElement = ratio.toFixed(2) * 100;
        progressBarElement.style.width = `${percentageOfScrolledElement}%`;
    }
    setIntersectionObserver() {
        const observer = new IntersectionObserver((entiresOnObservedElement) => {
            entiresOnObservedElement.forEach((entry) => {
                const intersectionRatio = entry.intersectionRatio;
                debounce(this.changeProgressBarSize(intersectionRatio), 500);
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
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};
const c = new ProgressReadingBarObserver(options);
c.initializeProgressBar();
