"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const random_1 = tslib_1.__importDefault(require("../../utils/random"));
async function run() {
    const txt = await node_fetch_1.default('https://raw.githubusercontent.com/npm/npm-expansions/master/expansions.txt').then(res => res.text());
    return random_1.default(txt.split('\n').filter(line => !line.startsWith('#')));
}
exports.run = run;
exports.help = 'What does n-p-m stand for?';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvRUFBOEI7QUFDOUIsd0VBQXVDO0FBQ2hDLEtBQUssVUFBVSxHQUFHO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0JBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzdILE9BQU8sZ0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsQ0FBQztBQUhELGtCQUdDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsNEJBQTRCLENBQUE7QUFDbkMsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFBIn0=