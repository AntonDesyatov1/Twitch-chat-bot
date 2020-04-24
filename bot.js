const tmi = require("tmi.js");
const playSound = require("./src/soundsHandler.js");

// Define configuration options
const opts = {
  identity: {
    username: "lossdotabot",
    password: "oauth:735bw0vcezualh13yrjftrhzli2329"
  },
  channels: ["lossdota"]
};
// Create a client with our options
const client = new tmi.client(opts);

// Called every time a message comes in
const onMessageHandler = (target, context, msg, self) => {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }

  if (commandName.includes("!playsound")) {
    playSound(msg.slice(11));
  }
};

// Function called when the "dice" command is issued
const rollDice = () => {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
};

// Called every time the bot connects to Twitch chat
const onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
};

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();
