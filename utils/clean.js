"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
async function default_1(client, text) {
    if (text && text instanceof Promise)
        text = await text;
    if (typeof text !== 'string')
        text = util_1.inspect(text, { depth: 1 });
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(client.token, '<redacted>');
    return text;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUErQjtBQVdoQixLQUFLLG9CQUFXLE1BQVcsRUFBRSxJQUFTO0lBQ25ELElBQUksSUFBSSxJQUFJLElBQUksWUFBWSxPQUFPO1FBQUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDO0lBQ3ZELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtRQUFFLElBQUksR0FBRyxjQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakUsSUFBSSxHQUFHLElBQUk7U0FDUixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUkQsNEJBUUMifQ==