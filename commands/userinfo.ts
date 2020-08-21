import { Message } from "eris";
import { Bot } from "../utils/types";

export async function run (this: Bot, message: Message, args: string[]) {
  if (!message.guildID) return 'This command only works in a server!'
  const getUser = message.mentions.length >= 1 ? message.mentions[0] : (args.length !== 0 ? this.users.get(args[0]) : message.author);
  let user;
  if (getUser) {
    user = getUser;
  } else if (args.join(" ") !== "") {
    const userRegex = new RegExp(args.join("|"), "i");
    const member = this.users.find(element => {
      return userRegex.test(element.username);
    });
    user = member ? member : message.author;
  } else {
    user = message.author;
  }
  //const user = getUser !== undefined ? getUser : (message.author);
  const member = await this.getRESTGuildMember(message.guildID, user.id);
  const infoEmbed = {
    "embed": {
      "title": `${user.username}#${user.discriminator}`,
      "thumbnail": {
        "url": user.avatarURL
      },
      "color": 16711680,
      "fields": [
        {
          "name": "🔢 **ID:**",
          "value": user.id
        },
        {
          "name": "📛 **Nickname:**",
          "value": member ? (member.nick ? member.nick : "None") : "N/A"
        },
        {
          "name": "🤖 **Bot:**",
          "value": user.bot ? "Yes" : "No"
        },
        {
          "name": "🗓️ **Joined Discord on:**",
          "value": new Date(user.createdAt).toString()
        },
        {
          "name": "💬 **Joined this server on:**",
          "value": member ? new Date(member.joinedAt).toString() : "N/A"
        },
        {
          "name": "ℹ️ **Status:**",
          "value": member ? member.status : "Unknown"
        },
        {
          "name": "🎮 **Playing:**",
          "value": member ? (member.game ? member.game.name : "Nothing") : "Unknown"
        }
      ]
    }
  };
  return infoEmbed;
}
