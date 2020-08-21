"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../utils/random"));
function run() {
    return random_1.default(this.guilds
        .map(guild => guild.emojis)
        .flat()
        .filter(Boolean).map(emoji => emoji.toString())) || 'The bot somehow has no emoji. What the?';
}
exports.run = run;
exports.help = 'Random emote from the servers this bot is in';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbW90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EscUVBQW9DO0FBQ3BDLFNBQWdCLEdBQUc7SUFDakIsT0FBTyxnQkFBTSxDQUNYLElBQUksQ0FBQyxNQUFNO1NBQ1IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUMxQixJQUFJLEVBQUU7U0FDTixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ2xELElBQUkseUNBQXlDLENBQUE7QUFDaEQsQ0FBQztBQVBELGtCQU9DO0FBQ1ksUUFBQSxJQUFJLEdBQUcsOENBQThDLENBQUEifQ==