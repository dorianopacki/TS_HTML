export class ProgressReadingBarObserver {
  htmlElements: HTMLElement[]; 

  constructor(...htmlElements: HTMLElement[]) {
    this.htmlElements = htmlElements;
  }

  initProgressBar() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.add("with-progress-reading-bar");
        const progressBarWrapper = document.createElement("div");
        const progressBarInside = document.createElement("div");
    
        function scroll() {
          const winScroll = document.documentElement.scrollTop - entry.target.offsetTop + document.documentElement.clientHeight;
          const height = entry.boundingClientRect.height;
          const scrolled = (winScroll / height) * 100;
          progressBarInside.style.width = scrolled + "%";
        }
  
        window.addEventListener("scroll", scroll);
    
        entry.target.insertAdjacentElement("afterbegin", progressBarWrapper);
        progressBarWrapper.classList.toggle("progress-bar-wrapper");
        progressBarWrapper.appendChild(progressBarInside);
        progressBarInside.classList.toggle("progress-bar-inside");

        observer.unobserve(entry.target);
      });
    });
 
  this.htmlElements.forEach((element) => observer.observe(element));
  }
}
