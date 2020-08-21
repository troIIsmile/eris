import { Bot } from '../utils/types'
import random from '../utils/random'
export function run (this: Bot) {
  return random(
    this.guilds
      .map(guild => guild.emojis)
      .flat()
      .filter(Boolean).map(emoji => emoji.toString())
  ) || 'The bot somehow has no emoji. What the?'
}
export const help = 'Random emote from the servers this bot is in'
