"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
exports.run = async (_, args) => {
    try {
        const { balance } = await node_fetch_1.default('https://dogechain.info/api/v1/address/balance/' + encodeURIComponent(args.join(' '))).then(res => res.json());
        return {
            embed: {
                author: {
                    name: 'Dogechain',
                    url: 'https://dogechain.info',
                    iconURL: 'https://dogechain.info/favicon.png'
                },
                color: 0x89c496,
                fields: [{
                        name: 'Balance',
                        value: balance + ' DOGE',
                        inline: true
                    }]
            }
        };
    }
    catch (error) {
        return {
            embed: {
                author: {
                    name: 'Dogechain',
                    url: 'https://dogechain.info',
                    iconURL: 'https://dogechain.info/favicon.png'
                },
                description: 'Error! \n' + error,
                color: 'RED'
            }
        };
    }
};
exports.help = 'see how much DOGE dogecoin addresses have';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvRUFBOEI7QUFFakIsUUFBQSxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQU8sRUFBRSxJQUFjLEVBQUUsRUFBRTtJQUNuRCxJQUFJO1FBQ0YsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLE1BQU0sb0JBQUssQ0FBQyxnREFBZ0QsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMxSSxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVztvQkFDakIsR0FBRyxFQUFFLHdCQUF3QjtvQkFDN0IsT0FBTyxFQUFFLG9DQUFvQztpQkFDOUM7Z0JBQ0QsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsTUFBTSxFQUFFLENBQUM7d0JBQ1AsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLE9BQU8sR0FBRyxPQUFPO3dCQUN4QixNQUFNLEVBQUUsSUFBSTtxQkFDYixDQUFDO2FBQ0g7U0FDRixDQUFBO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXO29CQUNqQixHQUFHLEVBQUUsd0JBQXdCO29CQUM3QixPQUFPLEVBQUUsb0NBQW9DO2lCQUM5QztnQkFDRCxXQUFXLEVBQUUsV0FBVyxHQUFHLEtBQUs7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFBO0tBQ0Y7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRywyQ0FBMkMsQ0FBQSJ9