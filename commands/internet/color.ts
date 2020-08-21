import { Message, AdvancedMessageContent as MessageOptions } from 'eris'
import fetch from 'node-fetch'
export async function run (message: Message, args: string[]): Promise<MessageOptions> {
  const clr = args.join('')
  const res = await fetch('https://colornames.org/search/json/?hex=' + encodeURIComponent(clr))
  if (res.ok) {
    const { name } = await res.json()
    return {
      embed: {
        title: name || 'Name not found!',
        color: Number.parseInt(clr, 16),
        url: 'https://colornames.org/color/' + clr
      }
    }
  } else {
    return {
      embed: {
        color: 0xFF0000,
        title: 'That isn\'t a hex color!'
      }
    }
  }
}
export const help = 'Get the name of a color. '
export const aliases = []
