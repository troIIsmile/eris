"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.help = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
exports.help = 'orange man badyyyyyyyyy! give me upvote!!!!';
exports.run = async () => {
    const data = await node_fetch_1.default('https://api.tronalddump.io/random/quote').then(res => res.json());
    return {
        embed: {
            author: {
                name: 'Donald J. Trump',
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
                url: 'https://twitter.com/realDonaldTrump'
            },
            description: data.value,
            title: '',
            timestamp: new Date(data.appeared_at),
            color: 0x1DA1F2,
            footer: {
                text: 'Tronald Dump API',
                icon_url: 'https://www.tronalddump.io/img/tronalddump_850x850.png'
            },
            fields: [{
                    name: 'Source',
                    value: data._embedded.source[0].url,
                }]
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cnVtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0VBQThCO0FBQ2pCLFFBQUEsSUFBSSxHQUFHLDZDQUE2QyxDQUFBO0FBQ3BELFFBQUEsR0FBRyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzVCLE1BQU0sSUFBSSxHQUFHLE1BQU0sb0JBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzNGLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLHdGQUF3RjtnQkFDakcsR0FBRyxFQUFFLHFDQUFxQzthQUMzQztZQUNELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3JDLEtBQUssRUFBRSxRQUFRO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFFBQVEsRUFBRSx3REFBd0Q7YUFDbkU7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztpQkFDcEMsQ0FBQztTQUNIO0tBQ0YsQ0FBQTtBQUNILENBQUMsQ0FBQSJ9