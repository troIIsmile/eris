"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const google_tts_api_1 = tslib_1.__importDefault(require("google-tts-api"));
exports.run = async (_message, args) => {
    try {
        return {
            files: [
                {
                    attachment: await google_tts_api_1.default(args.filter(arg => !arg.startsWith('--')).join(' '), 'en', args.includes('--slow') ? 0.27 : 1),
                    name: 'sound.mp3'
                }
            ]
        };
    }
    catch (e) {
        if (e instanceof RangeError) {
            return 'The -tts command only supports up to 200 chars. Blame Google!';
        }
        else
            return 'Error!\nError data:\n' + e;
    }
};
exports.help = 'gives you an mp3 of what you typed. try using --slow';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSw0RUFBaUM7QUFFcEIsUUFBQSxHQUFHLEdBQUcsS0FBSyxFQUFFLFFBQWlCLEVBQUUsSUFBYyxFQUFFLEVBQUU7SUFDN0QsSUFBSTtRQUNGLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsVUFBVSxFQUFFLE1BQU0sd0JBQUcsQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDbkQsSUFBSSxFQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuQztvQkFDRCxJQUFJLEVBQUUsV0FBVztpQkFDbEI7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksVUFBVSxFQUFFO1lBQzNCLE9BQU8sK0RBQStELENBQUM7U0FDeEU7O1lBQU0sT0FBTyx1QkFBdUIsR0FBRyxDQUFDLENBQUM7S0FDM0M7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxzREFBc0QsQ0FBQyJ9