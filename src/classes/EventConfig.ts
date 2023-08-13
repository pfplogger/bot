export class EventConfig {
    name: string;

    constructor(title: string) {
        this.name = title;
        if (!this.name) {
            throw Error("All values of 'EventConfig' class must be provided.");
        }
    }
}
