"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
async function run() {
    const { answer, image: url } = await (await fetch('https://yesno.wtf/api')).json();
    return {
        embed: {
            author: {
                name: 'Yes Or No?',
                url: 'https://yesno.wtf/',
                iconURL: 'https://yesno.wtf/assets/favicons/favicon-32x32-32e4b13414766709719da720e81cf1b2.png'
            },
            title: answer,
            image: {
                url
            }
        }
    };
}
exports.run = run;
exports.help = 'Yes, no, or maybe';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyI4YmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPTyxLQUFLLFVBQVUsR0FBRztJQUN2QixNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBYyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdGLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxvQkFBb0I7Z0JBQ3pCLE9BQU8sRUFBRSxzRkFBc0Y7YUFDaEc7WUFDRCxLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRTtnQkFDTCxHQUFHO2FBQ0o7U0FDRjtLQUNGLENBQUE7QUFDSCxDQUFDO0FBZkQsa0JBZUM7QUFDWSxRQUFBLElBQUksR0FBRyxtQkFBbUIsQ0FBQSJ9