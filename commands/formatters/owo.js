"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../../utils/random"));
const faces = ['OwO', 'UwU', '-w-'];
exports.run = (message, args) => {
    return {
        content: `*${args.join(' ')}* ${random_1.default(faces)}`,
        allowedMentions: {
            everyone: false,
            users: false,
            roles: false
        }
    };
};
exports.help = 'Pwease use my Disoword bot UwU';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3dvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3dvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx3RUFBdUM7QUFFdkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQ3RCLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBZ0IsRUFBRSxJQUFjLEVBQWtCLEVBQUU7SUFDdEUsT0FBTztRQUNMLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZ0JBQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMvQyxlQUFlLEVBQUU7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGLENBQUE7QUFDSCxDQUFDLENBQUE7QUFDWSxRQUFBLElBQUksR0FBRyxnQ0FBZ0MsQ0FBQSJ9