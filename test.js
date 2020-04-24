// Called every time a message comes in
class BasicFunctions {
  constructor() {}

  onMessageHandler(target, context, msg, self) {
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
    } else {
      console.log(`* Unknown command ${commandName}`);
    }
  }

  // Called every time the bot connects to Twitch chat
  onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
}

const rollDice = () => {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
};
module.exports = BasicFunctions;
