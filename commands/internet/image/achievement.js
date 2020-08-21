"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.help = void 0;
exports.help = 'achievement <text> - Makes a minecraft achievement';
const talkedRecently = new Set();
exports.run = (msg, args) => {
    if (talkedRecently.has(msg.author.id)) {
        return `Please wait 30 seconds before doing that again, ${msg.author}!`;
    }
    else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
            talkedRecently.delete(msg.author.id);
        }, 30000);
    }
    if (args.join('')) {
        return {
            files: [
                {
                    attachment: `https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${encodeURIComponent(args.join('+'))}`,
                    name: 'mc.png'
                }
            ]
        };
    }
    return 'you need text';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNoaWV2ZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2hpZXZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLElBQUksR0FBRyxvREFBb0QsQ0FBQztBQUN6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBRXBCLFFBQUEsR0FBRyxHQUFHLENBQUMsR0FBWSxFQUFFLElBQWMsRUFBRSxFQUFFO0lBQ2xELElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sbURBQW1ELEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztLQUN6RTtTQUFNO1FBQ0wsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ1g7SUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDakIsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxVQUFVLEVBQUUsc0ZBQXNGLGtCQUFrQixDQUNsSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNmLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUNELE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyJ9