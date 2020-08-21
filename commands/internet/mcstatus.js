"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
exports.run = async () => {
    const data = await node_fetch_1.default('https://status.mojang.com/check').then(res => res.json());
    const fields = data
        .map(Object.entries)
        .flat()
        .map(([name, status]) => ({
        name,
        value: status === 'green' ? '✅ Up' : '❎ Down',
        inline: true
    }));
    return {
        embed: {
            author: {
                name: 'Mojang Status',
                url: 'https://twiter.com/MojangStatus',
                iconURL: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Mojang_Studios_Logo%2C_May_2020_Redesign.png'
            },
            fields
        }
    };
};
exports.help = 'is minecraft down?';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNzdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtY3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0VBQThCO0FBTWpCLFFBQUEsR0FBRyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzVCLE1BQU0sSUFBSSxHQUFhLE1BQU0sb0JBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzdGLE1BQU0sTUFBTSxHQUFHLElBQUk7U0FDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbkIsSUFBSSxFQUFFO1NBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSTtRQUNKLEtBQUssRUFBRSxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDN0MsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDLENBQUMsQ0FBQTtJQUNMLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLEdBQUcsRUFBRSxpQ0FBaUM7Z0JBQ3RDLE9BQU8sRUFBRSw2RkFBNkY7YUFDdkc7WUFDRCxNQUFNO1NBQ1A7S0FDRixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxJQUFJLEdBQUcsb0JBQW9CLENBQUEifQ==