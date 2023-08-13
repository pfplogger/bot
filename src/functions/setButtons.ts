import Discord from "discord.js";
import fs from "fs";
import { Button } from "../classes/Button";
import chalk from "chalk";

export async function setButtons(): Promise<
  Discord.Collection<string, Button>
> {
  const buttonFolders = fs.readdirSync("./src/buttons");
  const buttons = new Discord.Collection<string, Button>();
  for (const folder of buttonFolders) {
    const buttonFiles = fs
      .readdirSync(`./src/buttons/${folder}`)
      .filter((file) => file.endsWith(".ts"));

    for (const file of buttonFiles) {
      const button = require(`../buttons/${folder}/${file}`).default;
      if (!button || button.constructor.name !== "Button")
        throw Error(
          `Provided objects from buttons folder must use "Button" class - ${file}`
        );
      try {
        buttons.set(file, button);
        console.log(chalk.magentaBright("Loaded button:", chalk.bold(`${file}`)));
      } catch (error) {
        console.error(chalk.redBright("Error loading button", chalk.bold(`${button}`), `: ${error}`));
      }
    }
  }
  return buttons;
}
