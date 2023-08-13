import { ButtonConfig } from "./ButtonConfig";

export class Button {
    config: ButtonConfig;
    // eslint-disable-next-line @typescript-eslint/ban-types
    run: Function;

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(config: ButtonConfig, run: Function) {
        this.config = config;
        this.run = run;

        if (!this.config || !this.run) {
            throw Error("All values of 'Button' class must be provided.");
        }
    }
}
