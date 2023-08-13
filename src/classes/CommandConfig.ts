export class CommandConfig {
    name: string;
    description: string;
    category: string;
    aliases: Array<string>;
    permissions: Array<bigint>;
    devOnly: boolean;
    cooldown: number;
    example: string;
    usage: string;
    expectedArgs: Array<number | { min: number; max: number }>;
    constructor(name: string, description: string, category: string, aliases: Array<string>, permissions: Array<bigint>, devOnly: boolean, cooldown: number, example: string, usage: string, expectedArgs: Array<number | { min: number; max: number }>) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.aliases = aliases;
        this.permissions = permissions;
        this.devOnly = devOnly;
        this.cooldown = cooldown;
        this.example = example;
        this.usage = usage;
        this.expectedArgs = expectedArgs;
        if (!this.name || !this.description || !this.category || !this.aliases || !this.permissions || this.devOnly == null || !this.cooldown || !this.example || !this.usage || !this.expectedArgs) {
            // eslint-disable-next-line quotes
            throw Error('All values of "CommandConfig" class must be provided.');
        }
    }
}
