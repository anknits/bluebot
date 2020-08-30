const fs = require('fs');
const mongoose = require("mongoose");
const Discord = require('discord.js');
const client = new Discord.Client();

// connect to mongodb, the databse
mongoose.connect(process.env.mongodbConnectionString, {
    useNewUrlParser: true, useUnifiedTopology: true
}, err => {
    if (err) {
        console.error('Failed to Establish Connection with MongoDB. Error: ' + err);
    }
});

const prefix = '!';
client.commands = new Discord.Collection();
// read only javascript files inside the commands folder for commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// this function is triggered once the bot successfully connects to the discord server
client.once('ready', () => {
    console.log("bluebot is online");
});

client.on('message', message => {
    // ignore messages not meant for the bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // separate out command and argument from input message
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const argsToString = args.join(" ");

    if (command === "hi") {
        client.commands.get('hi').execute(message, argsToString);
    }
    else if (command === "google") {
        client.commands.get('google').execute(message, argsToString);
    }
    else if (command === "recent") {
        client.commands.get('recent').execute(message, argsToString);
    }

});

client.login(process.env.bottoken).catch(console.error);