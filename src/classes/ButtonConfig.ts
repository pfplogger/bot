export class ButtonConfig {
    name: string;
    category: string;

    constructor(name: string, category: string) {
        this.name = name;
        this.category = category;

        if (!this.name || !this.category) {
            throw Error("All values of 'ButtonConfig' class must be provided.");
        }
    }
}
