import { CommandConfig } from "./CommandConfig";

export class Command {
    [x: string]: any;
    config: CommandConfig;
    // eslint-disable-next-line @typescript-eslint/ban-types
    run: Function;
    aliases: any;

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(config: CommandConfig, run: Function) {
        this.config = config;
        this.run = run;

        if (!this.config || !this.run) {
            throw Error("All values of 'Command' class must be provided.");
        }
    }
}
