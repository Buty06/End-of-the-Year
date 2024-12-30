const container = document.querySelector(".fireworks");
const fireworksButton = document.getElementById("button1");
let validation = true;

//?Logica de la libreria y configuracion de los fuegos
const fireworks = new Fireworks.default(container, {
  particles: 80,
  explosion: 10,
  intensity: 60,
  mouse: {
    click: true,
    max: 1,
  },
  sound: {
    enabled: true,
    files: [
      "assets/explosion0.mp3",
      "assets/explosion1.mp3",
      "assets/explosion2.mp3",
    ],
    volume: { min: 4, max: 8 },
  },
});

//?Ejecucion de la funcion/libreria
fireworks.start()

//?Logica para el boton de FIREWORKS
fireworksButton.addEventListener("click", () => {
  if (validation) {
    fireworks.stop();
  } else {
    fireworks.start();
  }
  validation = !validation
});
