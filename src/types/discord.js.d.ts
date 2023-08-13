import { Command } from "./../classes/Command";
import { Event } from "./../classes/Event";
import { Button } from "./../classes/Button";
import { Collection } from "discord.js";

declare module "discord.js" {
    export interface Client {
        events: Collection<string, Event>;
        eventListeners: Collection<string, (...args: any[]) => any>;
        commands: Collection<string, Command>;
        buttons: Collection<string, Button>;
        prefix: string;
        cooldowns: Collection<string, Collection<string, number>>;
    }
}
