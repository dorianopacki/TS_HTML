const getWeek = (startDate) => {
  const week = [dateFns.startOfWeek(startDate)];

  for (let i = 1; i <= 7; i++) {
    week[i] = dateFns.nextDay(week[i - 1]);
  }

  return week;
};

const changeWeek = (event) => {
  const element = [...event.target.classList];
  const type = element.filter((element) => element.includes("week"));

  if (type[0] === "next-week") {
    //get next Sunday and render days
  }
  if (type[0] === "previous-week") {
    //get previous week and render days
  }
};

const days = document.querySelectorAll(".day");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => button.addEventListener("click", changeWeek));
