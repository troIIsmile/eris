"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../../../utils/random"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run() {
    const { items } = await node_fetch_1.default('https://api.github.com/search/code?q=extension:jpg+repo:AhoyLemon/damn.dog').then(res => res.json());
    const { url } = random_1.default(items);
    const { download_url, name } = await (await node_fetch_1.default(url)).json();
    const title = name.replace('.jpg', '').split('-').map(item => {
        return item.charAt(0).toUpperCase() + item.substring(1);
    }).join(' ');
    return {
        embed: {
            author: {
                name: 'wikiHow',
                iconURL: 'https://www.wikihow.com/skins/WikiHow/wH-initials_152x152.png',
                url: 'https://www.wikihow.com'
            },
            title: 'How To ' + title,
            color: 0xeaecf0,
            url: 'https://www.wikihow.com/' + title.split(' ').join('-'),
            image: {
                url: download_url
            },
            footer: {
                text: 'List from damn.dog by Lemon',
                iconURL: 'https://damn.dog/favicon-194x194.png'
            }
        }
    };
}
exports.run = run;
exports.help = 'Get a random odd wikiHow image';
exports.aliases = ['wikiHow', 'WikiHow'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraWhvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpa2lob3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDJFQUEwQztBQUMxQyxvRUFBOEI7QUF5RnZCLEtBQUssVUFBVSxHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBUyxNQUFNLG9CQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN6SSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxHQUFZLE1BQU0sQ0FBQyxNQUFNLG9CQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN2RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNaLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLCtEQUErRDtnQkFDeEUsR0FBRyxFQUFFLHlCQUF5QjthQUMvQjtZQUNELEtBQUssRUFBRSxTQUFTLEdBQUcsS0FBSztZQUN4QixLQUFLLEVBQUUsUUFBUTtZQUNmLEdBQUcsRUFBRSwwQkFBMEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDNUQsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSw2QkFBNkI7Z0JBQ25DLE9BQU8sRUFBRSxzQ0FBc0M7YUFDaEQ7U0FDRjtLQUNGLENBQUE7QUFDSCxDQUFDO0FBMUJELGtCQTBCQztBQUNZLFFBQUEsSUFBSSxHQUFHLGdDQUFnQyxDQUFBO0FBQ3ZDLFFBQUEsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBIn0=