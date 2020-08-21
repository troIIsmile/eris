import { Message } from 'eris';
import { Bot } from '../../utils/types';

export const run = async function (this: Bot, message: Message) {
  const msg = (await this.createMessage(message.channel.id, 'Ping?')) as Message;
  msg.edit(
    `Pong! Latency is ${msg.timestamp -
    message.timestamp}ms.`
  );
};
export const help = 'see the l a g of the bot';
