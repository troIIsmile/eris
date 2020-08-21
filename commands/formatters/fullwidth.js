"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
function run(message, args) {
    if (args.join('').length === 0)
        return 'give me text to convert to fullwidth';
    return args
        .join('')
        .replace(/[A-Za-z0-9]/g, s => String.fromCharCode(s.charCodeAt(0) + 0xfee0));
}
exports.run = run;
exports.help = 'ＶＡＰＯＲＷＡＶＥ';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVsbHdpZHRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLFNBQWdCLEdBQUcsQ0FBRSxPQUFnQixFQUFFLElBQWM7SUFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQzVCLE9BQU8sc0NBQXNDLENBQUE7SUFDL0MsT0FBTyxJQUFJO1NBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNSLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUNoRixDQUFDO0FBTkQsa0JBTUM7QUFFWSxRQUFBLElBQUksR0FBRyxXQUFXLENBQUEifQ==