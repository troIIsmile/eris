"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const random_1 = tslib_1.__importDefault(require("../../../utils/random"));
async function run() {
    const langs = await node_fetch_1.default('https://tio.run/languages.json').then(res => res.json());
    const { name: title, tests, link: url } = random_1.default(Object.entries(langs))[1];
    return {
        embed: {
            title,
            url,
            description: `\`\`\`
${random_1.default(tests.helloWorld.request).payload['.code.tio']}
\`\`\``,
            fields: [{
                    name: 'Prints',
                    value: tests.helloWorld.response
                }]
        }
    };
}
exports.run = run;
exports.help = 'Hello world in a random programming language';
exports.aliases = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG93b3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG9FQUE4QjtBQUM5QiwyRUFBMEM7QUFxQ25DLEtBQUssVUFBVSxHQUFHO0lBQ3ZCLE1BQU0sS0FBSyxHQUFhLE1BQU0sb0JBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzdGLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUUsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLEtBQUs7WUFDTCxHQUFHO1lBQ0gsV0FBVyxFQUFFO0VBQ2pCLGdCQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO09BQ2hEO1lBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtpQkFDakMsQ0FBQztTQUNIO0tBQ0YsQ0FBQTtBQUNILENBQUM7QUFoQkQsa0JBZ0JDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsOENBQThDLENBQUE7QUFDckQsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFBIn0=