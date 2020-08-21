"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
exports.run = async (message, args) => {
    const video = await node_fetch_1.default(`https://projectlounge.pw/ytdl/download?url=${encodeURIComponent(args.join(' '))}`).then(res => res.buffer());
    return {
        embed: {
            title: 'Click here if the video is not displayed.',
            url: `https://projectlounge.pw/ytdl/download?url=${encodeURIComponent(args.join(' '))}`
        },
        files: video.length <= 8388608 ? [{
                attachment: video,
                name: 'video.mp4'
            }] : undefined
    };
};
exports.help = 'download videos';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3dubG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0Esb0VBQThCO0FBQ2pCLFFBQUEsR0FBRyxHQUFHLEtBQUssRUFBRSxPQUFnQixFQUFFLElBQWMsRUFBMkIsRUFBRTtJQUNyRixNQUFNLEtBQUssR0FBRyxNQUFNLG9CQUFLLENBQUMsOENBQThDLGtCQUFrQixDQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBRTlCLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELEdBQUcsRUFBRSw4Q0FBOEMsa0JBQWtCLENBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ2YsRUFBRTtTQUNKO1FBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxVQUFVLEVBQUUsS0FBSztnQkFDakIsSUFBSSxFQUFFLFdBQVc7YUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ2YsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsSUFBSSxHQUFHLGlCQUFpQixDQUFBIn0=