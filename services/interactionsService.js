const handleInteractions = async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    // TODO Replace this logic by agnostic logic out of the gateway
    if (commandName === 'ping') await interaction.reply('Pong!');
    if (commandName === 'beep') await interaction.reply('Boop!');
    if (commandName === 'hello') await interaction.reply(`Hi ${interaction.user.username}!`)
}

module.exports = { handleInteractions };