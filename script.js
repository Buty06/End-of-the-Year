const counter = document.querySelector(".counter");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

//?Para la musica de la pagina en el momento exacto
const sound = new Howl({
  src: ["assets/musica.mp3"],
});
const musicDate = new Date(2024, 11, 30, 15, 9, 56, 0);
let validator;

//?Nueva y mejor forma con requestAnimatonFrame
const updateTime = () => {
  const lastDate = new Date(2025, 0, 1);
  const actualDate = new Date();
  const diferencia = lastDate - actualDate;

  const time = {
    days: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minuts: Math.floor((diferencia / (1000 * 60)) % 60),
    seconds: Math.floor((diferencia / 1000) % 60)
  };

  days.textContent = time.days;
  hours.textContent = time.hours;
  minuts.textContent = time.minuts;
  seconds.textContent = time.seconds;

  if (actualDate > musicDate && validator !== false) {
    validator = true;

    if (validator) {
      sound.play();
      validator = false;
    }
  }

  requestAnimationFrame(updateTime);
};

//?Ejecuta la funcion recursiva
updateTime();
