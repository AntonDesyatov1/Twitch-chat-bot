var player = require("play-sound")((opts = {}));

function playSound(soundName) {
  player.play(`./src/sounds/${soundName}.mp3`, err => {
    if (err) {
      console.log("error " + err);
      throw err;
    }
  });
}

module.exports = playSound;
