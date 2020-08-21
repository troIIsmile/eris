"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const google_tts_api_1 = tslib_1.__importDefault(require("google-tts-api"));
exports.run = async (message, args) => {
    var _a, _b;
    if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        return 'You need to be in a voice channel!';
    }
    try {
        const channel = (_b = message.member) === null || _b === void 0 ? void 0 : _b.voice.channel;
        let url;
        if (args.includes('--slow')) {
            url = await google_tts_api_1.default(args.filter(arg => !arg.startsWith('--')).join(' '), 'en', 0.27);
        }
        else
            url = await google_tts_api_1.default(args.filter(arg => !arg.startsWith('--')).join(' '), 'en', 1);
        const connection = await channel.join();
        const dispatch = connection.play(url);
        dispatch.on('end', () => {
            dispatch.end();
            channel.leave();
        });
    }
    catch (e) {
        if (e instanceof RangeError) {
            return 'This command only supports up to 200 chars. Blame Google!';
        }
        else
            return 'Error!\nError data:\n' + e;
    }
};
exports.help = 'goes in your vc and says what you typed. try using --slow';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHRzdmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dHN2Yy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsNEVBQWlDO0FBRXBCLFFBQUEsR0FBRyxHQUFHLEtBQUssRUFBRSxPQUFnQixFQUFFLElBQWMsRUFBRSxFQUFFOztJQUM1RCxJQUFJLFFBQUMsT0FBTyxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQSxFQUFFO1FBQ2xDLE9BQU8sb0NBQW9DLENBQUM7S0FDN0M7SUFDRCxJQUFJO1FBQ0YsTUFBTSxPQUFPLFNBQUcsT0FBTyxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsR0FBRyxHQUFHLE1BQU0sd0JBQUcsQ0FDYixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNuRCxJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7U0FDSDs7WUFDQyxHQUFHLEdBQUcsTUFBTSx3QkFBRyxDQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ25ELElBQUksRUFDSixDQUFDLENBQ0YsQ0FBQztRQUNKLE1BQU0sVUFBVSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSxVQUFVLEVBQUU7WUFDM0IsT0FBTywyREFBMkQsQ0FBQztTQUNwRTs7WUFBTSxPQUFPLHVCQUF1QixHQUFHLENBQUMsQ0FBQztLQUMzQztBQUNILENBQUMsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLDJEQUEyRCxDQUFDIn0=