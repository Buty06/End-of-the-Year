const counter = document.querySelector(".counter");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

setInterval(() => {
  const lastDate = new Date(2025, 0, 1);
  const actualDate = new Date();
  const diferencia = lastDate - actualDate;

  const time = {
    days: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minuts: Math.floor((diferencia / (1000 * 60)) % 60),
    seconds: Math.floor((diferencia / 1000) % 60),
  };

  days.textContent = time.days;
  hours.textContent = time.hours;
  minuts.textContent = time.minuts;
  seconds.textContent = time.seconds;
}, 1000);
