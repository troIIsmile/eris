"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
exports.run = (message) => message.mentions.length
    ? {
        files: [
            {
                attachment: message.mentions[0].avatarURL,
                name: 'avatar.png'
            }
        ]
    }
    : {
        files: [
            {
                attachment: message.author.avatarURL,
                name: 'avatar.png'
            }
        ]
    };
exports.help = 'Get the avatar of a user.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXZhdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBQzlELENBQUMsQ0FBQztRQUNBLEtBQUssRUFBRTtZQUNMO2dCQUNFLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ3pDLElBQUksRUFBRSxZQUFZO2FBQ25CO1NBQ0Y7S0FDRjtJQUNELENBQUMsQ0FBQztRQUNBLEtBQUssRUFBRTtZQUNMO2dCQUNFLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ3BDLElBQUksRUFBRSxZQUFZO2FBQ25CO1NBQ0Y7S0FDRixDQUFDO0FBQ1MsUUFBQSxJQUFJLEdBQUcsMkJBQTJCLENBQUMifQ==