"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
async function run(message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (message.author.id === process.env.OWNER)
        return { content: '❌ This command is for the bot owner only.' };
    const cmdname = (this.commands.get(args.join(' ')) ? args.join(' ') : (this.commands.get(this.aliases.get(args.join(' ')) || '') ? this.aliases.get(args.join(' ')) : '')) || '';
    if (!((_a = this.commands.get(cmdname)) === null || _a === void 0 ? void 0 : _a.path))
        return { content: '❌ That command does not exist!' };
    if ((_b = this.commands.get(cmdname)) === null || _b === void 0 ? void 0 : _b.aliases) {
        (_d = (_c = this.commands.get(cmdname)) === null || _c === void 0 ? void 0 : _c.aliases) === null || _d === void 0 ? void 0 : _d.forEach(Map.prototype.delete.bind(this.aliases));
    }
    const path = (_e = this.commands.get(cmdname)) === null || _e === void 0 ? void 0 : _e.path;
    delete require.cache[path];
    this.commands.set(cmdname, { ...(await Promise.resolve().then(() => __importStar(require(path)))), path });
    if ((_f = this.commands.get(cmdname)) === null || _f === void 0 ? void 0 : _f.aliases) {
        (_h = (_g = this.commands.get(cmdname)) === null || _g === void 0 ? void 0 : _g.aliases) === null || _h === void 0 ? void 0 : _h.forEach(alias => {
            this.aliases.set(alias, cmdname);
        });
    }
    return {
        embed: {
            author: {
                name: 'Command reloaded!'
            },
            color: 0x9acd32,
            title: cmdname,
            description: (await Promise.resolve().then(() => __importStar(require(path)))).desc,
            fields: [{
                    name: 'Aliases',
                    value: ((await Promise.resolve().then(() => __importStar(require(path)))).aliases) ? ((await Promise.resolve().then(() => __importStar(require(path)))).aliases).join(', ') : ''
                }].filter(({ value }) => value)
        }
    };
}
exports.run = run;
exports.help = 'Reloads a command.';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxLQUFLLFVBQVUsR0FBRyxDQUFhLE9BQWdCLEVBQUUsSUFBYzs7SUFDcEUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7UUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLENBQUM7SUFDN0csTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pMLElBQUksUUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsMENBQUUsSUFBSSxDQUFBO1FBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDO0lBRTVGLFVBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLE9BQU8sRUFBRTtRQUN2QyxZQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQ3ZGO0lBR0QsTUFBTSxJQUFJLEdBQUcsTUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsMENBQUUsSUFBSyxDQUFDO0lBQy9DLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsd0RBQWEsSUFBSSxHQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRzlELFVBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLE9BQU8sRUFBRTtRQUN2QyxZQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFO0tBQ0o7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxtQkFBbUI7YUFDMUI7WUFDRCxLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsV0FBVyxFQUFFLENBQUMsd0RBQWEsSUFBSSxHQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3RDLE1BQU0sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsd0RBQWEsSUFBSSxHQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdEQUFhLElBQUksR0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN2RixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFsQ0Qsa0JBa0NDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDNUIsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDIn0=