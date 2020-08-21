"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function getPost(sub) {
    const result = await node_fetch_1.default(`https://www.reddit.com/r/${sub}/random.json`)
        .then(res => res.json())
        .then(data => data[0].data.children[0]);
    if (result.data.url.startsWith('https://i.redd.it'))
        return result;
    return getPost(sub);
}
async function run(message, args) {
    if (!args.join('').length || args.join('_').length > 21) {
        return {
            embed: {
                title: 'Error!',
                description: 'That subreddit does not exist!'
            }
        };
    }
    message.channel.startTyping();
    const about = await node_fetch_1.default(`https://www.reddit.com/r/${encodeURI(args.join('_'))}/about.json`).then(res => res.json());
    if (about.data.description) {
        const { data: { community_icon: iconURL, display_name_prefixed: text } } = about;
        const { data: { title, author, created, url, permalink, ups, over_18 } } = await getPost(encodeURI(args.join('_')));
        message.channel.stopTyping();
        if (('nsfw' in message.channel && message.channel.nsfw) || !over_18) {
            return {
                embed: {
                    timestamp: created * 1000,
                    url: 'https://reddit.com' + permalink,
                    author: {
                        name: author,
                        url: 'https://reddit.com/u/' + author
                    },
                    title,
                    footer: {
                        text,
                        iconURL
                    },
                    image: {
                        url
                    },
                    fields: [
                        {
                            name: 'Upvotes',
                            value: ups
                        }
                    ],
                    color: 0xff4500
                }
            };
        }
        else {
            return {
                embed: {
                    title: 'Error!',
                    description: 'The bot found a NSFW post. As this is a SFW channel, this bot can not post NSFW content here without breaking Discord\'s Community Guidelines.'
                }
            };
        }
    }
    message.channel.stopTyping();
    return {
        embed: {
            title: 'Error!',
            description: 'That subreddit does not exist!'
        }
    };
}
exports.run = run;
exports.help = 'wholesome 100 - gives you a random post from the subreddit you choose';
exports.aliases = ['subreddit', 'r/'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxvRUFBK0I7QUFhL0IsS0FBSyxVQUFVLE9BQU8sQ0FBRSxHQUFXO0lBQ2pDLE1BQU0sTUFBTSxHQUFTLE1BQU0sb0JBQUssQ0FDOUIsNEJBQTRCLEdBQUcsY0FBYyxDQUM5QztTQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFDbkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVNLEtBQUssVUFBVSxHQUFHLENBQUUsT0FBZ0IsRUFBRSxJQUFjO0lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7UUFDdkQsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsUUFBUTtnQkFDZixXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDO1NBQ0YsQ0FBQztLQUNIO0lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixNQUFNLEtBQUssR0FBRyxNQUFNLG9CQUFLLENBQ3ZCLDRCQUE0QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQ25FLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUMxQixNQUFNLEVBQ0osSUFBSSxFQUFFLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFDL0QsR0FBRyxLQUFLLENBQUM7UUFDVixNQUFNLEVBQ0osSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQy9ELEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkUsT0FBTztnQkFDTCxLQUFLLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLE9BQU8sR0FBRyxJQUFJO29CQUN6QixHQUFHLEVBQUUsb0JBQW9CLEdBQUcsU0FBUztvQkFDckMsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxNQUFNO3dCQUNaLEdBQUcsRUFBRSx1QkFBdUIsR0FBRyxNQUFNO3FCQUN0QztvQkFDRCxLQUFLO29CQUNMLE1BQU0sRUFBRTt3QkFDTixJQUFJO3dCQUNKLE9BQU87cUJBQ1I7b0JBQ0QsS0FBSyxFQUFFO3dCQUNMLEdBQUc7cUJBQ0o7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLEtBQUssRUFBRSxHQUFHO3lCQUNYO3FCQUNGO29CQUNELEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTztnQkFDTCxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsV0FBVyxFQUFFLGdKQUFnSjtpQkFDOUo7YUFDRixDQUFDO1NBQ0g7S0FDRjtJQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxRQUFRO1lBQ2YsV0FBVyxFQUFFLGdDQUFnQztTQUM5QztLQUNGLENBQUM7QUFDSixDQUFDO0FBL0RELGtCQStEQztBQUVZLFFBQUEsSUFBSSxHQUNmLHVFQUF1RSxDQUFDO0FBRTdELFFBQUEsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDIn0=