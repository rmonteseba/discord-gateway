const { BOT_TOKEN } = require('./lib/config');
const { Client, Intents } = require('discord.js');
const intents = new Intents(32767);
const client = new Client({ intents });
const { handleInit } = require("./services/initService");
const { handleInteractions } = require("./services/interactionsService");

client.login(BOT_TOKEN)
    .then(() => console.info('Login attempt success'))
    .catch(() => console.error('Login attempt failed'));

client.once('ready', handleInit)
client.on('interactionCreate', handleInteractions);
