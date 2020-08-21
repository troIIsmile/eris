"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
async function run(message, args) {
    if (!args.join('').length) {
        return {
            embed: {
                author: {
                    name: 'Error!'
                },
                title: 'Please provide a username!',
                color: 'RED'
            }
        };
    }
    const { Id: id, IsOnline, errorMessage } = await node_fetch_1.default('https://api.roblox.com/users/get-by-username?username=' +
        encodeURIComponent(args.join(' '))).then(res => res.json());
    if (errorMessage) {
        return {
            embed: {
                author: {
                    name: 'Error!'
                },
                title: errorMessage,
                color: 'RED'
            }
        };
    }
    const friends = await node_fetch_1.default(`https://api.roblox.com/users/${id}/friends`).then(res => res.json());
    return {
        embed: {
            author: {
                name: args.join(' ') + IsOnline ? ' (🟢 Online)' : ' (🔴 Offline)',
                iconURL: `https://roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=${encodeURIComponent(args.join(' '))}`,
                url: `https://www.roblox.com/users/${id}/`
            },
            fields: friends.map(friend => {
                return {
                    name: friend.Username,
                    value: friend.IsOnline ? '🟢 Online' : '🔴 Offline',
                    inline: true
                };
            })
        }
    };
}
exports.run = run;
exports.help = 'username -> info';
exports.aliases = ['rblxonline'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJseGZyaWVuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYmx4ZnJpZW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0Esb0VBQThCO0FBT3ZCLEtBQUssVUFBVSxHQUFHLENBQUUsT0FBZ0IsRUFBRSxJQUFjO0lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUN6QixPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsUUFBUTtpQkFDZjtnQkFDRCxLQUFLLEVBQUUsNEJBQTRCO2dCQUNuQyxLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0YsQ0FBQTtLQUNGO0lBQ0QsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFXLE1BQU0sb0JBQUssQ0FDNUQsd0RBQXdEO1FBQ3RELGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDckMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN6QixJQUFJLFlBQVksRUFBRTtRQUNoQixPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsUUFBUTtpQkFDZjtnQkFDRCxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUE7S0FDRjtJQUNELE1BQU0sT0FBTyxHQUFhLE1BQU0sb0JBQUssQ0FDbkMsZ0NBQWdDLEVBQUUsVUFBVSxDQUM3QyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWU7Z0JBQ2xFLE9BQU8sRUFBRSw4REFBOEQsa0JBQWtCLENBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ2YsRUFBRTtnQkFDSCxHQUFHLEVBQUUsZ0NBQWdDLEVBQUUsR0FBRzthQUMzQztZQUNELE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtvQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWTtvQkFDbkQsTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQTtZQUNILENBQUMsQ0FBQztTQUNIO0tBQ0YsQ0FBQTtBQUNILENBQUM7QUFoREQsa0JBZ0RDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsa0JBQWtCLENBQUE7QUFDekIsUUFBQSxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQSJ9