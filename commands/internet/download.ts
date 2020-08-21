import { Message } from 'eris';
import fetch from 'node-fetch';
import { Bot } from "../../utils/types";
export const run = async function (this: Bot, message: Message, args: string[]): Promise<void> {
  const video = await fetch(`https://projectlounge.pw/ytdl/download?url=${encodeURIComponent(
    args.join(' ')
  )}`).then(res => res.buffer());

  this.createMessage(message.channel.id, {
    embed: {
      title: 'Click here if the video is not displayed.',
      url: `https://projectlounge.pw/ytdl/download?url=${encodeURIComponent(
        args.join(' ')
      )}`
    }
  }, video.length <= 8388608 ? [{
    file: video,
    name: 'video.mp4'
  }] : undefined);
  return undefined
};

export const help = 'download videos';
