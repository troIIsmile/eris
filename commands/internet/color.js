"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run(message, args) {
    const clr = args.join('');
    const res = await node_fetch_1.default('https://colornames.org/search/json/?hex=' + encodeURIComponent(clr));
    if (res.ok) {
        const { name } = await res.json();
        return {
            embed: {
                title: name || 'Name not found!',
                color: clr,
                url: 'https://colornames.org/color/' + clr
            }
        };
    }
    else {
        return {
            embed: {
                color: 'RED',
                title: 'That isn\'t a hex color!'
            }
        };
    }
}
exports.run = run;
exports.help = 'Get the name of a color. ';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0Esb0VBQThCO0FBQ3ZCLEtBQUssVUFBVSxHQUFHLENBQUUsT0FBZ0IsRUFBRSxJQUFjO0lBQ3pELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekIsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLDBDQUEwQyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDN0YsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2pDLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLElBQUksSUFBSSxpQkFBaUI7Z0JBQ2hDLEtBQUssRUFBRSxHQUFHO2dCQUNWLEdBQUcsRUFBRSwrQkFBK0IsR0FBRyxHQUFHO2FBQzNDO1NBQ0YsQ0FBQTtLQUNGO1NBQU07UUFDTCxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSwwQkFBMEI7YUFDbEM7U0FDRixDQUFBO0tBQ0Y7QUFDSCxDQUFDO0FBcEJELGtCQW9CQztBQUNZLFFBQUEsSUFBSSxHQUFHLDJCQUEyQixDQUFBO0FBQ2xDLFFBQUEsT0FBTyxHQUFHLEVBQUUsQ0FBQSJ9