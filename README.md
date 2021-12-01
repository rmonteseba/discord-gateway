# Discord Gateway

Built on top of [Discord.js](https://discord.js.org/#/)

### Initialize the project:

Just run `yarn dev`, [nodemon](https://nodemon.io/) is running behind so all changes are loaded on the fly during the server execution.

You should manage the basic Discord bot configuration and credentials from the [Discord Developer Portal (DDP)](https://discord.com/developers/applications) all the environments should have their own credentials.

### Envars:
| **Key**             | **Description**                                                                                                                                                                  | **Type** | **Value**                                           |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------|
| **PORT**            | Any free port for running the server on your local machine                                                                                                                       | Number   | e.g: 3000, 3001                                     |
| **APPLICATION_ID**  | The application identifier given by the DDP instance                                                                                                                             | Number   | Please ask a maintainer for getting this credential |
| **BOT_TOKEN**       | The bot token given by the DDP instance                                                                                                                                          | Hashcode | Please ask a maintainer for getting this credential |
| **SERVER_GUILD_ID** | The Guild ID of the server where the bot will be deployed, more info [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | Number   | Please ask a maintainer for getting this credential |