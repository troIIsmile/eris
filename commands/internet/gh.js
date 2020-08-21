"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run(_, args) {
    const { html_url: url, avatar_url: iconURL, created_at, bio: description, public_repos, public_gists, followers, following } = await node_fetch_1.default('https://api.github.com/users/' + encodeURI(args.join('_')))
        .then(res => res.json());
    if (!url) {
        return {
            embed: {
                title: "That user doesn't exist!",
                color: 'RED',
                footer: {
                    text: 'GitHub',
                    iconURL: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                }
            }
        };
    }
    return {
        embed: {
            author: {
                url, iconURL,
                name: args.join('_')
            },
            timestamp: new Date(created_at),
            description,
            footer: {
                text: 'GitHub',
                iconURL: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
            },
            fields: [{
                    inline: true,
                    name: 'Public Repos',
                    value: public_repos
                }, {
                    inline: true,
                    name: 'Public Gists',
                    value: public_gists
                }, {
                    inline: true,
                    name: 'Followers',
                    value: followers
                }, {
                    inline: true,
                    name: 'Following',
                    value: following
                }]
        }
    };
}
exports.run = run;
exports.help = 'Get info about a GitHub user.';
exports.aliases = ['github'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0Esb0VBQThCO0FBQ3ZCLEtBQUssVUFBVSxHQUFHLENBQUUsQ0FBTSxFQUFFLElBQWM7SUFDL0MsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLG9CQUFLLENBQUMsK0JBQStCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLDJFQUEyRTtpQkFDckY7YUFDRjtTQUNGLENBQUE7S0FDRjtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLE9BQU87Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixXQUFXO1lBQ1gsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSwyRUFBMkU7YUFDckY7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxNQUFNLEVBQUUsSUFBSTtvQkFDWixJQUFJLEVBQUUsY0FBYztvQkFDcEIsS0FBSyxFQUFFLFlBQVk7aUJBQ3BCLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLElBQUk7b0JBQ1osSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRSxZQUFZO2lCQUNwQixFQUFFO29CQUNELE1BQU0sRUFBRSxJQUFJO29CQUNaLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUUsU0FBUztpQkFDakIsRUFBRTtvQkFDRCxNQUFNLEVBQUUsSUFBSTtvQkFDWixJQUFJLEVBQUUsV0FBVztvQkFDakIsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCLENBQUM7U0FDSDtLQUNGLENBQUE7QUFDSCxDQUFDO0FBOUNELGtCQThDQztBQUNZLFFBQUEsSUFBSSxHQUFHLCtCQUErQixDQUFBO0FBQ3RDLFFBQUEsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUEifQ==