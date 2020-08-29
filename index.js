const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("bluebot is online");
});


client.login(process.env.bottoken).catch(console.error);