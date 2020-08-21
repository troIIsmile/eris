import { Message, MessageContent as MessageOptions } from 'eris';
import clean from '../../utils/clean';
import { Bot } from '../../utils/types';

export async function run (
  this: Bot,
  message: Message,
  args: string[]
): Promise<MessageOptions | void> {
  if (message.author.id === process.env.OWNER) {
    try {
      const code = args.join(' ');
      const evaled = eval(code);
      const txt = await clean(this, evaled);
      const msg = `\`\`\`js\n${txt}\n\`\`\``;
      if (msg.length <= 2000) return { content: msg };
      this.createMessage(message.channel.id, 'The output was more than 2000 characters; here is a file with the output:', {
        name: 'output.txt',
        file: Buffer.from(txt)
      });
      return
    } catch (err) {
      return { content: `\`ERROR\` \`\`\`xl\n${await clean(this, err)}\n\`\`\`` };
    }
  } else return { content: 'You are not the bot owner.' };
}
export const help = 'give it code and it runs it';
