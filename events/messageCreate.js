"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prefixes_1 = tslib_1.__importDefault(require("../utils/prefixes"));
async function default_1(message) {
    var _a, _b, _c, _d;
    if (!((_a = message.author) === null || _a === void 0 ? void 0 : _a.bot)) {
        const prefix = prefixes_1.default[message.guildID || ''] || '-';
        const content = message.content || '';
        const name = [...this.commands.keys(), ...this.aliases.keys()].find(cmdname => content.startsWith(`${prefix}${cmdname} `) ||
            content === `${prefix}${cmdname}`);
        if (name) {
            const command = ((_b = this.commands.get(name)) === null || _b === void 0 ? void 0 : _b.run) || ((_c = this.commands.get(this.aliases.get(name) || '')) === null || _c === void 0 ? void 0 : _c.run)
                || (() => { });
            try {
                const output = await command.call(this, message, content
                    .substring(prefix.length + 1 + name.length)
                    .split(' '));
                if (output)
                    this.createMessage(message.channel.id, output);
            }
            catch (err) {
                this.createMessage(message.channel.id, {
                    embed: {
                        author: {
                            name: `${(_d = this.user) === null || _d === void 0 ? void 0 : _d.username} ran into an error while running your command!`,
                        },
                        title: err.toString(),
                        color: 0xFF0000,
                        footer: {
                            text: `Report this bug @ ${require('../package.json').bugs}`
                        }
                    }
                });
            }
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZUNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2VDcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUVBQXdDO0FBR3pCLEtBQUssb0JBQXNCLE9BQWdCOztJQUV4RCxJQUFJLFFBQUMsT0FBTyxDQUFDLE1BQU0sMENBQUUsR0FBRyxDQUFBLEVBQUU7UUFFeEIsTUFBTSxNQUFNLEdBQVcsa0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUM5RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2pFLE9BQU8sQ0FBQyxFQUFFLENBQ1IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsQ0FBQztZQUMxQyxPQUFPLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQ3BDLENBQUM7UUFFRixJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLE9BQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDBDQUFFLEdBQUcsWUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLDBDQUFFLEdBQUcsQ0FBQTttQkFDcEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVqQixJQUFJO2dCQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FDL0IsSUFBSSxFQUNKLE9BQWtCLEVBRWxCLE9BQU87cUJBQ0osU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQzFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDZCxDQUFDO2dCQUVGLElBQUksTUFBTTtvQkFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVEO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtvQkFDckMsS0FBSyxFQUFFO3dCQUNMLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsR0FBRyxNQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsZ0RBQWdEO3lCQUM3RTt3QkFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDckIsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxxQkFBcUIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFO3lCQUM3RDtxQkFDRjtpQkFDRixDQUFDLENBQUE7YUFDSDtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBNUNELDRCQTRDQyJ9