"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const prefixes_1 = tslib_1.__importDefault(require("../../utils/prefixes"));
async function run(message, args) {
    var _a;
    if (message.guildID) {
        return (args.join('').length && ((_a = message.member) === null || _a === void 0 ? void 0 : _a.permission.has('ADMINISTRATOR')) || false)
            ? `Set your server's prefix to \`${prefixes_1.default[message.guildID] = args.join(' ')}\`!`
            : 'You need to be a server admin and provide a prefix!';
    }
    return 'You need to be on a server you have admin on.';
}
exports.run = run;
exports.help = 'Set the prefix for your server.';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlZml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSw0RUFBNEM7QUFFckMsS0FBSyxVQUFVLEdBQUcsQ0FBRSxPQUFnQixFQUFFLElBQWM7O0lBQ3pELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLFdBQUksT0FBTyxDQUFDLE1BQU0sMENBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxLQUFLLENBQUM7WUFDdkYsQ0FBQyxDQUFDLGlDQUFpQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1lBQ2xGLENBQUMsQ0FBQyxxREFBcUQsQ0FBQztLQUMzRDtJQUNELE9BQU8sK0NBQStDLENBQUM7QUFDekQsQ0FBQztBQVBELGtCQU9DO0FBQ1ksUUFBQSxJQUFJLEdBQUcsaUNBQWlDLENBQUM7QUFDekMsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDIn0=