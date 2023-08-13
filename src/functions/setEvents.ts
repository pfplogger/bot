import Discord from "discord.js";
import fs from "fs";
import { Event } from "../classes/Event";
import { client } from "../index";
import chalk from "chalk";

export async function setEvents(): Promise<Discord.Collection<string, Event>> {
  const eventFolders = fs.readdirSync("./src/events");
  const events = new Discord.Collection<string, Event>();

  for (const folder of eventFolders) {
    const eventFiles = fs
      .readdirSync(`./src/events/${folder}`)
      .filter((file) => file.endsWith(".ts"));

    for (const file of eventFiles) {
      events.clear();

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const event = require(`../events/${folder}/${file}`).default;
      if (!event || event.constructor.name !== "Event")
        throw Error(
          `Provided objects from events folder must use "Event" class - ${file}`
        );
      client.on(event.config.name, (...args) => event.run(...args));
      try {
        events.set(file, event);
        console.log(chalk.greenBright("Loaded event:", chalk.bold(`${file}`)));
      } catch (error) {
        console.error(chalk.redBright("Error loading event", chalk.bold(`${file}`), `: ${error}`));
      }
    }
  }
  return events;
}
