"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
function run(message, args) {
    if (args.length === 0) {
        return `${message.author}, you need to provide what you want to spam!`;
    }
    if (message.content.includes("@everyone") || message.content.includes("@here")) {
        return "I don't know about you, but that seems like a bad idea.";
    }
    return args.join(" ").repeat(2000).substring(0, 2000);
}
exports.run = run;
exports.help = "repeat a message over and over";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBZ0IsR0FBRyxDQUFDLE9BQWdCLEVBQUUsSUFBYztJQUNsRCxJQUNFLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUNqQjtRQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSw4Q0FBOEMsQ0FBQztLQUN4RTtJQUNELElBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQzFFO1FBQ0EsT0FBTyx5REFBeUQsQ0FBQztLQUNsRTtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBWkQsa0JBWUM7QUFFWSxRQUFBLElBQUksR0FBRyxnQ0FBZ0MsQ0FBQyJ9