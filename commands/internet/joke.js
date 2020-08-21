"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run() {
    const [{ setup, punchline }] = await node_fetch_1.default('https://official-joke-api.appspot.com/jokes/programming/random').then(res => res.json());
    return {
        embed: {
            title: setup,
            description: punchline,
            author: {
                name: 'Official Joke API',
                url: 'https://github.com/15Dkatz/official_joke_api'
            }
        }
    };
}
exports.run = run;
exports.help = 'is not funny';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpva2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9FQUE4QjtBQVF2QixLQUFLLFVBQVUsR0FBRztJQUN2QixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBVyxNQUFNLG9CQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUM1SSxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsR0FBRyxFQUFFLDhDQUE4QzthQUNwRDtTQUNGO0tBQ0YsQ0FBQTtBQUNILENBQUM7QUFaRCxrQkFZQztBQUNZLFFBQUEsSUFBSSxHQUFHLGNBQWMsQ0FBQTtBQUNyQixRQUFBLE9BQU8sR0FBRyxFQUFFLENBQUEifQ==