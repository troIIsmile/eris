"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
exports.run = async function (message) {
    const msg = (await this.createMessage(message.channel.id, 'Ping?'));
    msg.edit(`Pong! Latency is ${msg.timestamp -
        message.timestamp}ms.`);
};
exports.help = 'see the l a g of the bot';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR2EsUUFBQSxHQUFHLEdBQUcsS0FBSyxXQUFzQixPQUFnQjtJQUM1RCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBWSxDQUFDO0lBQy9FLEdBQUcsQ0FBQyxJQUFJLENBQ04sb0JBQW9CLEdBQUcsQ0FBQyxTQUFTO1FBQ2pDLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FDdkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNXLFFBQUEsSUFBSSxHQUFHLDBCQUEwQixDQUFDIn0=