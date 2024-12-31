const counter = document.querySelector(".counter");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");
const musicButton = document.getElementById("button2");

//? Logica para la musica de la pagina en el momento exacto
const sound = new Howl({
  src: ["assets/musica.mp3"],
});
const musicDate = new Date(2024, 11, 31, 23, 58, 58, 0);
let validator;

//? Logica para renderizar los elementos con requestAnimatonFrame
const updateTime = () => {
  const lastDate = new Date(2025, 0, 1);
  const actualDate = new Date();
  const diferencia = lastDate - actualDate;

  //? Calculo para sacar los segundos entre otras cosas de la fecha 
  const time = {
    days: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minuts: Math.floor((diferencia / (1000 * 60)) % 60),
    seconds: Math.floor((diferencia / 1000) % 60),
  };

  //? Renderizando los elementos
  days.textContent = time.days;
  hours.textContent = time.hours;
  minuts.textContent = time.minuts;
  seconds.textContent = time.seconds;

  //? Logica para el inicio de la musica programada
  if (actualDate > musicDate && validator !== false) {
    validator = true;

    if (validator) {
      sound.play();
      validator = false;
    }
  }

  //?Inicia la recursividad
  requestAnimationFrame(updateTime);
};

//?Ejecuta la funcion recursiva
updateTime();

//?Logica para el boton de MUSIC
//!Old style
// musicButton.addEventListener('click',()=>{
//   if (validatorStop) {
//     sound.pause();
//     validatorStop = false;
//   } else {
//     sound.play();
//     validatorStop = true;
//   }
// })

//*New Style
let validatorStop = getState('musicOn', true);

musicButton.addEventListener("click", () => {
  if (validatorStop) {
    sound.pause();
    setState('musicOn', false)
  } else {
    sound.play();
    setState('musicOn', true)
  }
  validatorStop = !validatorStop;
});
