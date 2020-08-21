"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run() {
    var _a;
    const timestamp = process.uptime();
    const hours = Math.floor(timestamp / 60 / 60);
    delete require.cache[require.resolve('../../package.json')];
    const owner = this.users.cache.get(process.env.OWNER);
    if (!(this.user && owner))
        return {
            content: 'oops the owner or the bot user does not exist some how'
        };
    const esmBotMessages = await node_fetch_1.default('https://raw.githubusercontent.com/TheEssem/esmBot/master/messages.json').then(res => res.json());
    const messages = (await Promise.resolve().then(() => tslib_1.__importStar(require('../../messages')))).all;
    const linesFromEsmBot = messages.filter(line => esmBotMessages.includes(line)).length;
    const percentOfLines = (linesFromEsmBot * 100) / messages.length;
    return {
        embed: {
            author: {
                name: `About ${this.user.username}`,
                iconURL: (_a = this.user) === null || _a === void 0 ? void 0 : _a.displayAvatarURL(),
                url: require('../../package.json').homepage
            },
            title: 'Invite the bot',
            url: (await this.generateInvite(['ADMINISTRATOR'])),
            color: 0x454545,
            footer: {
                text: `Owned by ${owner.tag}`,
                iconURL: owner.displayAvatarURL()
            },
            fields: [{
                    name: '✏ Credits',
                    value: `
        URL for the -achievement command from esmBot by Essem#9261
        [${percentOfLines.toFixed(5)}% of the "Playing" messages from esmBot](https://github.com/TheEssem/esmBot/blob/master/messages.json)`,
                    inline: false
                }, {
                    name: '💬 Server Count',
                    value: this.guilds.cache.size,
                    inline: true
                }, {
                    name: '🧑🏻 User Count',
                    value: this.users.cache.size,
                    inline: true
                }, {
                    name: 'ℹ Bot Version',
                    value: require('../../package.json').version,
                    inline: true
                }, {
                    name: '📚 Discord.js Version',
                    value: discord_js_1.version, inline: true
                }, {
                    name: '⏰ Uptime',
                    value: [hours, Math.floor(timestamp / 60) - (hours * 60), Math.floor(timestamp % 60)].join(':'),
                    inline: true
                }, {
                    name: '🖥 OS',
                    value: process.platform,
                    inline: true
                }, {
                    name: '🙋🏻‍♂️ Support',
                    value: process.env.SUPPORT
                }, {
                    name: '>_ Command Count',
                    value: this.commands.size,
                    inline: true
                }].filter(field => field.value)
        }
    };
}
exports.run = run;
exports.help = 'Statistics about the bot.';
exports.aliases = ['list', 'stats'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQW9EO0FBRXBELG9FQUE4QjtBQUV2QixLQUFLLFVBQVUsR0FBRzs7SUFDdkIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBR2xDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUU3QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFFM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBZSxDQUFDLENBQUE7SUFFL0QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFBRSxPQUFPO1lBQ2hDLE9BQU8sRUFBRSx3REFBd0Q7U0FDbEUsQ0FBQTtJQUVELE1BQU0sY0FBYyxHQUFhLE1BQU0sb0JBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzlJLE1BQU0sUUFBUSxHQUFHLENBQUMsZ0VBQWEsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtJQUNyRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtJQUNyRixNQUFNLGNBQWMsR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFBO0lBQ2hFLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU8sUUFBRSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxnQkFBZ0IsRUFBRTtnQkFDdEMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVE7YUFDNUM7WUFDRCxLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVksS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTthQUNsQztZQUNELE1BQU0sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUU7O1dBRUosY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0dBQXdHO29CQUNwSSxNQUFNLEVBQUUsS0FBSztpQkFDZCxFQUFFO29CQUNELElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO29CQUM3QixNQUFNLEVBQUUsSUFBSTtpQkFDWCxFQUFDO29CQUNGLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO29CQUM1QixNQUFNLEVBQUUsSUFBSTtpQkFDYixFQUFFO29CQUNELElBQUksRUFBRSxlQUFlO29CQUNyQixLQUFLLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTztvQkFDNUMsTUFBTSxFQUFFLElBQUk7aUJBQ2IsRUFBRTtvQkFDRCxJQUFJLEVBQUUsdUJBQXVCO29CQUM3QixLQUFLLEVBQUUsb0JBQU8sRUFBRSxNQUFNLEVBQUUsSUFBSTtpQkFDN0IsRUFBRTtvQkFDRCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDL0YsTUFBTSxFQUFFLElBQUk7aUJBQ2IsRUFBRTtvQkFDRCxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVE7b0JBQ3ZCLE1BQU0sRUFBRSxJQUFJO2lCQUNiLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztpQkFDM0IsRUFBRTtvQkFDRCxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUN6QixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNoQztLQUNGLENBQUE7QUFDSCxDQUFDO0FBdkVELGtCQXVFQztBQUVZLFFBQUEsSUFBSSxHQUFHLDJCQUEyQixDQUFBO0FBQ2xDLFFBQUEsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBIn0=