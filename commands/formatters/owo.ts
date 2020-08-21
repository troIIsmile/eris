import random from '../../utils/random'
import { Message, MessageContent } from 'eris'
const faces = ['OwO', 'UwU', '-w-']
export const run = (message: Message, args: string[]): MessageContent => {
  return {
    content: `*${args.join(' ')}* ${random(faces)}`,
    allowedMentions: {
      everyone: false,
      users: false,
      roles: false
    }
  }
}
export const help = 'Pwease use my Disoword bot UwU'
