"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run(_message, args) {
    const res = await node_fetch_1.default('https://minecraftskinstealer.com/api/v1/skin/render/skin/' + encodeURI(args.join(' ')));
    return res.ok
        ? {
            content: `Here's the Minecraft: Java Edition skin of ${args.join(' ')}!`,
            files: [
                {
                    attachment: await res.buffer(),
                    name: 'skin.png'
                }
            ]
        }
        : {
            embed: {
                title: res.status === 404 ? 'Player not found!' : `${res.status}: ${res.statusText}`,
                description: 'OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo!',
                color: 'RED'
            }
        };
}
exports.run = run;
exports.help = 'mcsteal - Get the skin of a Minecraft: Java Edition player. Syntax: mcsteal <username>';
exports.aliases = ['mc'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNzdGVhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1jc3RlYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG9FQUErQjtBQUN4QixLQUFLLFVBQVUsR0FBRyxDQUFFLFFBQWlCLEVBQUUsSUFBYztJQUMxRCxNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFLLENBQUMsMkRBQTJELEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pILE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDWCxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsOENBQThDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDeEUsS0FBSyxFQUFFO2dCQUNMO29CQUNFLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLElBQUksRUFBRSxVQUFVO2lCQUNqQjthQUNGO1NBQ0Y7UUFDRCxDQUFDLENBQUM7WUFDQSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BGLFdBQVcsRUFBRSxxRUFBcUU7Z0JBQ2xGLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFDO0FBQ04sQ0FBQztBQW5CRCxrQkFtQkM7QUFDWSxRQUFBLElBQUksR0FBRyx3RkFBd0YsQ0FBQztBQUNoRyxRQUFBLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=