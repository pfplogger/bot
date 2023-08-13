import { EventConfig } from "./EventConfig";

export class Event {
    config: EventConfig;
    // eslint-disable-next-line @typescript-eslint/ban-types
    run: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(config: EventConfig, run: Function) {
        this.config = config;
        this.run = run;

        if (!this.config || !this.run) {
            throw Error("All values of 'Event' class must be provided.");
        }
    }
}
