import { Message, AdvancedMessageContent as MessageOptions } from 'eris'
import fetch from 'node-fetch'
interface Player {
  Id: number
  Username: string
  IsOnline: boolean,
  errorMessage?: string
}
export async function run (message: Message, args: string[]): Promise<MessageOptions> {
  if (!args.join('').length) {
    return {
      embed: {
        author: {
          name: 'Error!'
        },
        title: 'Please provide a username!',
        color: 0xFF0000
      }
    }
  }
  const { Id: id, IsOnline, errorMessage }: Player = await fetch(
    'https://api.roblox.com/users/get-by-username?username=' +
      encodeURIComponent(args.join(' '))
  ).then(res => res.json())
  if (errorMessage) {
    return {
      embed: {
        author: {
          name: 'Error!'
        },
        title: errorMessage,
        color: 0xFF0000
      }
    }
  }
  const friends: Player[] = await fetch(
    `https://api.roblox.com/users/${id}/friends`
  ).then(res => res.json())
  return {
    embed: {
      author: {
        name: args.join(' ') + IsOnline ? ' (🟢 Online)' : ' (🔴 Offline)',
        icon_url: `https://roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=${encodeURIComponent(
          args.join(' ')
        )}`,
        url: `https://www.roblox.com/users/${id}/`
      },
      fields: friends.map(friend => {
        return {
          name: friend.Username,
          value: friend.IsOnline ? '🟢 Online' : '🔴 Offline',
          inline: true
        }
      })
    }
  }
}
export const help = 'username -> info'
export const aliases = ['rblxonline']
