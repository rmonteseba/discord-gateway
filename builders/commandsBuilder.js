const {SlashCommandBuilder} = require('@discordjs/builders');

const BASE_COMMANDS_SET = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('hello').setDescription('kommit bot will say hello to you!'),
].map(command => command.toJSON());

module.exports = {
    BASE_COMMANDS_SET,
};