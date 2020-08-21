"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
function run(message, args) {
    if (args.join('').length === 0)
        return message.reply('give me text to make a QR Code from!');
    return {
        files: [
            {
                attachment: 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=' +
                    encodeURIComponent(args.join('+')).replace(/%2B/g, '+'),
                name: 'code.png'
            }
        ]
    };
}
exports.run = run;
exports.help = 'make a QR Code';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFnQixHQUFHLENBQUUsT0FBZ0IsRUFBRSxJQUFjO0lBQ25ELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUMvRCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsVUFBVSxFQUNSLDREQUE0RDtvQkFDNUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO2dCQUN6RCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFiRCxrQkFhQztBQUVZLFFBQUEsSUFBSSxHQUFHLGdCQUFnQixDQUFDIn0=