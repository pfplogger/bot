import { Client, GatewayIntentBits, Collection } from "discord.js";
import handleErrors from "./functions/errorHandling";
import chalk from "chalk";
import { setCommands } from "./functions/setCommands";
import { setEvents } from "./functions/setEvents";
import { setButtons } from "./functions/setButtons";
import * as dotenv from "dotenv";

dotenv.config();

handleErrors();

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
    ],
});

client.prefix = process.env.PREFIX;
client.cooldowns = new Collection();
client.commands;
client.buttons;
client.events;
client.eventListeners = new Collection<string, (...args: any[]) => any>();

console.log(chalk.cyanBright(chalk.italic("\n   starting pfp logger...   \n")));

client.login(process.env.TOKEN).then(async () => {
    client.commands = await setCommands();
    client.events = await setEvents();
    client.buttons = await setButtons();
});