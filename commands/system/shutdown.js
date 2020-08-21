"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
async function run(message) {
    var _a;
    if (message.author.id === process.env.OWNER) {
        await this.createMessage(message.channel.id, {
            embed: {
                author: {
                    name: (_a = this.user) === null || _a === void 0 ? void 0 : _a.username
                },
                description: 'Shutting down...',
                color: 0xFF0000
            }
        });
        this.disconnect({ reconnect: false });
        process.exit(0);
    }
    else
        return 'you are not the bot owner';
}
exports.run = run;
exports.help = 'Turns off the bot.';
exports.aliases = ['reboot'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaHV0ZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHTyxLQUFLLFVBQVUsR0FBRyxDQUFhLE9BQWdCOztJQUNwRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQzNDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFO29CQUNOLElBQUksUUFBRSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxRQUFRO2lCQUMxQjtnQkFDRCxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCOztRQUFNLE9BQU8sMkJBQTJCLENBQUM7QUFDNUMsQ0FBQztBQWRELGtCQWNDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDNUIsUUFBQSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyJ9