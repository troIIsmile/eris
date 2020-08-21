"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const nintendo_switch_eshop_1 = tslib_1.__importDefault(require("nintendo-switch-eshop"));
const error = {
    embed: {
        author: {
            name: 'Error'
        },
        description: "Couldn't find your game!",
        color: 'RED'
    }
};
async function run(message, args) {
    message.channel.startTyping();
    try {
        const { msrp: price, img: thumbnail, lastModified: timestamp, title, characters, categories, developers, url, esrb, esrbDescriptors, description, players } = ((await nintendo_switch_eshop_1.default()).find(game => game.title.toLowerCase().includes(args.join(' ').toLowerCase())));
        if (title) {
            await message.channel.send({
                embed: {
                    image: 'https://nintendo.com' + thumbnail,
                    title,
                    description: description.replace(/\*/g, '\\*'),
                    timestamp,
                    url: 'https://nintendo.com' + url,
                    author: {
                        name: developers[0] || '???'
                    },
                    color: 0xfe7c02,
                    fields: [
                        {
                            name: 'Price',
                            value: '$' + price || '???',
                            inline: true
                        },
                        {
                            name: 'Players',
                            value: players || '???',
                            inline: true
                        },
                        {
                            name: 'Categories',
                            value: categories.join(', ') || '???',
                            inline: true
                        },
                        {
                            name: 'Characters',
                            value: characters.join(', ') || '???',
                            inline: true
                        },
                        {
                            name: 'Rating',
                            value: `${esrb} (${esrbDescriptors.join(', ')})`,
                            inline: true
                        }
                    ]
                }
            });
        }
        else {
            return error;
        }
    }
    catch (e) {
        return error;
    }
    finally {
        message.channel.stopTyping();
    }
}
exports.run = run;
exports.help = 'you will buy these thi';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNob3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsMEZBQTZDO0FBZTdDLE1BQU0sS0FBSyxHQUFHO0lBQ1osS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNELFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsS0FBSyxFQUFFLEtBQUs7S0FDYjtDQUNGLENBQUM7QUFFSyxLQUFLLFVBQVUsR0FBRyxDQUFFLE9BQWdCLEVBQUUsSUFBYztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLElBQUk7UUFDRixNQUFNLEVBQ0osSUFBSSxFQUFFLEtBQUssRUFDWCxHQUFHLEVBQUUsU0FBUyxFQUNkLFlBQVksRUFBRSxTQUFTLEVBQ3ZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixHQUFHLEVBQ0gsSUFBSSxFQUNKLGVBQWUsRUFDZixXQUFXLEVBQ1gsT0FBTyxFQUNSLEdBQW1CLENBQ2xCLENBQUMsTUFBTSwrQkFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNoRSxDQUNGLENBQUM7UUFDRixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsc0JBQXNCLEdBQUcsU0FBUztvQkFDekMsS0FBSztvQkFDTCxXQUFXLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO29CQUM5QyxTQUFTO29CQUNULEdBQUcsRUFBRSxzQkFBc0IsR0FBRyxHQUFHO29CQUNqQyxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLO3FCQUM3QjtvQkFDRCxLQUFLLEVBQUUsUUFBUTtvQkFDZixNQUFNLEVBQUU7d0JBQ047NEJBQ0UsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFLEdBQUcsR0FBRyxLQUFLLElBQUksS0FBSzs0QkFDM0IsTUFBTSxFQUFFLElBQUk7eUJBQ2I7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLOzRCQUN2QixNQUFNLEVBQUUsSUFBSTt5QkFDYjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSzs0QkFDckMsTUFBTSxFQUFFLElBQUk7eUJBQ2I7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUs7NEJBQ3JDLE1BQU0sRUFBRSxJQUFJO3lCQUNiO3dCQUNEOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzRCQUNoRCxNQUFNLEVBQUUsSUFBSTt5QkFDYjtxQkFDRjtpQkFDRjthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7WUFBUztRQUNSLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBdEVELGtCQXNFQztBQUVZLFFBQUEsSUFBSSxHQUFHLHdCQUF3QixDQUFDIn0=