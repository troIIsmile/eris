import Collection from "@discordjs/collection";
import { Client, Message, MessageContent as MessageOptions } from 'eris';
type Return = (MessageOptions  | void);

interface CommandObj {
  run: (this: Bot, message: Message, args: string[]) => Return | Promise<Return>,
  help: string,
  path: string,
  aliases?: string[];
}

interface Bot extends Client {
  commands: Collection<string, CommandObj>;
  aliases: Collection<string, string>;
}

export {
  Bot, CommandObj
};
