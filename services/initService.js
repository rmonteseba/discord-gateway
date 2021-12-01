const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {BASE_COMMANDS_SET} = require('../builders/commandsBuilder');
const {BOT_TOKEN, APPLICATION_ID, SERVER_GUILD_ID} = require('../lib/config');

const handleInit = async (c) => {
    console.info(`Ready! Logged in as ${c.user.tag}`);
    const rest = new REST({ version: '9' }).setToken(BOT_TOKEN);
    try {
        await rest.put(Routes.applicationGuildCommands(APPLICATION_ID, SERVER_GUILD_ID), { body: BASE_COMMANDS_SET })
        console.log('Successfully registered application commands', BASE_COMMANDS_SET.map(command => command.name))
    } catch (e) {
        console.error(e);
    }
};

module.exports = { handleInit };
