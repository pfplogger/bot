import Discord from "discord.js";
import fs from "fs";
import { Command } from "../classes/Command";
import chalk from "chalk";

export async function setCommands(): Promise<
  Discord.Collection<string, Command>
> {
  const commandFolders = fs.readdirSync("./src/commands");
  const commands = new Discord.Collection<string, Command>();
  commands.clear();
  for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`./src/commands/${folder}`)
      .filter((file) => file.endsWith(".ts"));

    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`).default;
      if (!command)
        throw Error(
          `Provided objects from commands folder must use "Command" class - ${file}`
        );
      try {
        commands.set(file, command);
        console.log(chalk.blueBright("Loaded command:", chalk.bold(`${file}`)));
      } catch (error) {
        console.error(chalk.redBright("Error loading command", chalk.bold(`${file}`), `: ${error}`));
      }
    }
  }
  return commands;
}
