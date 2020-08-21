"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const clean_1 = tslib_1.__importDefault(require("../../utils/clean"));
async function run(message, args) {
    if (message.author.id === process.env.OWNER) {
        try {
            const code = args.join(' ');
            const evaled = eval(code);
            const txt = await clean_1.default(this, evaled);
            const msg = `\`\`\`js\n${txt}\n\`\`\``;
            if (msg.length <= 2000)
                return { content: msg };
            this.createMessage(message.channel.id, 'The output was more than 2000 characters; here is a file with the output:', {
                name: 'output.txt',
                file: Buffer.from(txt)
            });
            return;
        }
        catch (err) {
            return { content: `\`ERROR\` \`\`\`xl\n${await clean_1.default(this, err)}\n\`\`\`` };
        }
    }
    else
        return { content: 'You are not the bot owner.' };
}
exports.run = run;
exports.help = 'give it code and it runs it';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHNFQUFzQztBQUcvQixLQUFLLFVBQVUsR0FBRyxDQUV2QixPQUFnQixFQUNoQixJQUFjO0lBRWQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sR0FBRyxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7WUFDdkMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUk7Z0JBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLDJFQUEyRSxFQUFFO2dCQUNsSCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztZQUNILE9BQU07U0FDUDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsTUFBTSxlQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM3RTtLQUNGOztRQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztBQUMxRCxDQUFDO0FBckJELGtCQXFCQztBQUNZLFFBQUEsSUFBSSxHQUFHLDZCQUE2QixDQUFDIn0=