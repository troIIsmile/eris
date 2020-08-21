"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../../../utils/random"));
async function run() {
    const { data: { memes } } = await fetch('https://api.imgflip.com/get_memes').then(res => res.json());
    const { name: title, url: img_url } = random_1.default(memes);
    return {
        embed: {
            author: {
                name: 'Imgflip',
                iconURL: 'https://imgflip.com/apple-touch-icon.png',
                url: 'https://imgflip.com'
            },
            title,
            url: 'https://imgflip.com/meme/' + title.replace(/ /g, '-'),
            image: {
                url: img_url
            }
        }
    };
}
exports.run = run;
exports.help = 'Get a random meme template from imgflip.';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtZXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtZXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSwyRUFBMEM7QUFrQm5DLEtBQUssVUFBVSxHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFlLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDaEgsTUFBTSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBQyxHQUFHLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsMENBQTBDO2dCQUNuRCxHQUFHLEVBQUUscUJBQXFCO2FBQzNCO1lBQ0QsS0FBSztZQUNMLEdBQUcsRUFBRSwyQkFBMkIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFDM0QsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxPQUFPO2FBQ2I7U0FDRjtLQUNGLENBQUE7QUFDSCxDQUFDO0FBakJELGtCQWlCQztBQUNZLFFBQUEsSUFBSSxHQUFHLDBDQUEwQyxDQUFBO0FBQ2pELFFBQUEsT0FBTyxHQUFHLEVBQUUsQ0FBQSJ9