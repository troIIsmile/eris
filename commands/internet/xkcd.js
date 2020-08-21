"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const template = {
    color: 0x6e6e6e,
    type: 'image',
    author: {
        name: 'xkcd',
        url: 'https://xkcd.com',
        iconURL: 'https://pbs.twimg.com/profile_images/413359024617185280/pS8lVAWA_400x400.png'
    }
};
exports.run = async (_message, [comicnum]) => {
    if (comicnum && isNaN(parseInt(comicnum))) {
        return {
            embed: {
                ...template,
                color: 'RED',
                description: "That isn't a number."
            }
        };
    }
    try {
        const url = comicnum && comicnum.match(/^\d+$/)
            ? `https://xkcd.com/${comicnum}/info.0.json`
            : 'https://xkcd.com/info.0.json';
        const { year, month, day, alt: description, img, num, safe_title: title } = await node_fetch_1.default(url).then(res => res.json());
        return {
            embed: {
                ...template,
                title,
                timestamp: `${year}-${month}-${day}`,
                description,
                image: {
                    url: img
                },
                url: `https://xkcd.com/${num}`,
            }
        };
    }
    catch (error) {
        return {
            embed: {
                ...template,
                color: 'RED',
                description: error.toString()
            }
        };
    }
};
exports.help = 'funny comic';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGtjZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhrY2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLG9FQUErQjtBQUMvQixNQUFNLFFBQVEsR0FBRztJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsT0FBTyxFQUNMLDhFQUE4RTtLQUNqRjtDQUNGLENBQUM7QUFjVyxRQUFBLEdBQUcsR0FBRyxLQUFLLEVBQUUsUUFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBVyxFQUFFLEVBQUU7SUFDbkUsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ3pDLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxRQUFRO2dCQUNYLEtBQUssRUFBRSxLQUFLO2dCQUNaLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7U0FDRixDQUFDO0tBQ0g7SUFDRCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQ1AsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxvQkFBb0IsUUFBUSxjQUFjO1lBQzVDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQztRQUNyQyxNQUFNLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxHQUFHLEVBQ0gsR0FBRyxFQUFFLFdBQVcsRUFDaEIsR0FBRyxFQUNILEdBQUcsRUFDSCxVQUFVLEVBQUUsS0FBSyxFQUNsQixHQUFVLE1BQU0sb0JBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLEdBQUcsUUFBUTtnQkFDWCxLQUFLO2dCQUNMLFNBQVMsRUFBRSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO2dCQUNwQyxXQUFXO2dCQUNYLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUsR0FBRztpQkFDVDtnQkFDRCxHQUFHLEVBQUUsb0JBQW9CLEdBQUcsRUFBRTthQUMvQjtTQUNGLENBQUM7S0FDSDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxHQUFHLFFBQVE7Z0JBQ1gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osV0FBVyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7YUFDOUI7U0FDRixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxhQUFhLENBQUMifQ==