const container = document.querySelector(".fireworks");
const fireworksButton = document.getElementById("button1");
let validation = true;

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

fireworks.start()

fireworksButton.addEventListener("click", () => {
  if (validation) {
    fireworks.stop();
    validation = false;
  } else {
    fireworks.start();
    validation = true;
  }
});
