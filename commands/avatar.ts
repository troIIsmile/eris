import { Message } from 'eris';

export const run = (message: Message) => message.mentions.length
  ? {
    files: [
      {
        attachment: message.mentions[0].avatarURL,
        name: 'avatar.png'
      }
    ]
  }
  : {
    files: [
      {
        attachment: message.author.avatarURL,
        name: 'avatar.png'
      }
    ]
  };
export const help = 'Get the avatar of a user.';
