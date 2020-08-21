"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../../utils/random"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
function escapeMarkdown(text) {
    const unescaped = text.replace(/\\(\*|_|`|~|\\)/g, '$1');
    const escaped = unescaped.replace(/(\*|_|`|~|\\)/g, '\\$1');
    return escaped;
}
const rants = node_fetch_1.default('https://raw.githubusercontent.com/corollari/linusrants/master/data.json').then(res => res.json());
async function run() {
    const { text, hate } = random_1.default(await rants);
    return {
        embed: {
            author: {
                name: 'Linus Torvalds',
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg',
            },
            description: escapeMarkdown(text),
            fields: [{
                    name: 'Hate',
                    value: (hate * 100).toFixed(2) + '%',
                    inline: true
                }],
            footer: {
                text: 'Linux Kernel Mailing List'
            }
        }
    };
}
exports.run = run;
exports.help = 'A random rant from the creator of Linux.';
exports.aliases = ['linux'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGludXNyYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGludXNyYW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSx3RUFBdUM7QUFDdkMsb0VBQThCO0FBTTlCLFNBQVMsY0FBYyxDQUFFLElBQVk7SUFDbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN4RCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNELE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUM7QUFFRCxNQUFNLEtBQUssR0FBb0Isb0JBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2hJLEtBQUssVUFBVSxHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQzFDLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsT0FBTyxFQUFFLHlHQUF5RzthQUNuSDtZQUNELFdBQVcsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztvQkFDcEMsTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQztZQUNGLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsMkJBQTJCO2FBQ2xDO1NBQ0Y7S0FDRixDQUFBO0FBQ0gsQ0FBQztBQW5CRCxrQkFtQkM7QUFDWSxRQUFBLElBQUksR0FBRywwQ0FBMEMsQ0FBQTtBQUNqRCxRQUFBLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=