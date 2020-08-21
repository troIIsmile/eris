import { Bot } from '../../utils/types';
import { Message } from 'eris';

export async function run (this: Bot, message: Message): Promise<string | never> {
  if (message.author.id === process.env.OWNER) {
    await this.createMessage(message.channel.id, {
      embed: {
        author: {
          name: this.user?.username
        },
        description: 'Shutting down...',
        color: 0xFF0000
      }
    });
    this.disconnect({reconnect: false});
    process.exit(0);
  } else return 'you are not the bot owner';
}
export const help = 'Turns off the bot.';
export const aliases = ['reboot'];
