"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const prefixes_1 = tslib_1.__importDefault(require("../../utils/prefixes"));
const random_1 = tslib_1.__importDefault(require("../../utils/random"));
function chunk(array, size = 1) {
    let chunk = [];
    return array.reduce((acc, curr, idx, arr) => {
        chunk.push(curr);
        if (chunk.length === size) {
            acc.push(chunk);
            chunk = [];
        }
        if (chunk.length > 0 && idx === arr.length - 1) {
            acc.push(chunk);
        }
        return acc;
    }, []);
}
function run(message, args) {
    var _a, _b, _c;
    const page = parseInt(args.join('')) || 1;
    const commands = Array.from(this.commands.entries(), ([name, { help: desc, aliases }]) => [name + ((aliases && aliases.length) ? ` (Aliases: ${aliases === null || aliases === void 0 ? void 0 : aliases.join(', ')})` : ''), desc || ''])
        .sort((a, b) => {
        return a[0].localeCompare(b[0] || '') || -1;
    });
    const pages = chunk(commands, 20);
    return pages[page - 1] ? {
        embed: {
            title: `${((_a = this.user) === null || _a === void 0 ? void 0 : _a.username) || ''} Commands`,
            description: pages[page - 1].map(([name, description]) => `**${name}** - ${description}`).join('\n'),
            footer: {
                icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/VisualEditor_-_Icon_-_Book.svg/600px-VisualEditor_-_Icon_-_Book.svg.png',
                text: `${page}/${pages.length}`
            },
            fields: [
                {
                    name: 'Prefix',
                    value: prefixes_1.default[message.guildID || ''] || '-'
                },
                {
                    name: 'Tip',
                    value: random_1.default([
                        'Report bugs and feature requests at ' + require('../../package.json').bugs,
                        'This bot was created by ' + ((_b = this.users.get(process.env.OWNER || '')) === null || _b === void 0 ? void 0 : _b.discriminator) || 'someone'
                    ])
                }
            ]
        }
    } : {
        embed: {
            title: `${((_c = this.user) === null || _c === void 0 ? void 0 : _c.username) || ''} Commands`,
            description: 'That page does not exist.'
        }
    };
}
exports.run = run;
exports.help = 'Shows a list of all the commands and their descriptions.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLDRFQUEyQztBQUMzQyx3RUFBdUM7QUFFdkMsU0FBUyxLQUFLLENBQUUsS0FBWSxFQUFFLE9BQWUsQ0FBQztJQUM1QyxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUE7SUFDckIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDZixLQUFLLEdBQUcsRUFBRSxDQUFBO1NBQ1g7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ2hCO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDUixDQUFDO0FBQ0QsU0FBZ0IsR0FBRyxDQUFhLE9BQWdCLEVBQUUsSUFBYzs7SUFDOUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQ3BJO1NBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNKLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakMsT0FBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsR0FBRyxPQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsS0FBSSxFQUFFLFdBQVc7WUFDOUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksUUFBUSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEgsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxtSUFBbUk7Z0JBQzdJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2FBQ2hDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksR0FBRztpQkFDOUM7Z0JBQ0Q7b0JBQ0EsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLGdCQUFNLENBQUM7d0JBQ1osc0NBQXNDLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSTt3QkFDM0UsMEJBQTBCLFVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLDBDQUFFLGFBQWEsQ0FBQSxJQUFJLFNBQVM7cUJBQ2pHLENBQUM7aUJBQ0g7YUFBQztTQUNIO0tBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDQSxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsR0FBRyxPQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsS0FBSSxFQUFFLFdBQVc7WUFDOUMsV0FBVyxFQUFFLDJCQUEyQjtTQUN6QztLQUNGLENBQUE7QUFDTCxDQUFDO0FBckNELGtCQXFDQztBQUVZLFFBQUEsSUFBSSxHQUFHLDBEQUEwRCxDQUFBIn0=