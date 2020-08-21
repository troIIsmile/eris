"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliases = exports.help = exports.run = void 0;
async function run(message) {
    var _a;
    return {
        files: [{
                attachment: 'https://belikebill.ga/billgen-API.php?default=1&name=' + encodeURIComponent(((_a = message.member) === null || _a === void 0 ? void 0 : _a.nickname) || message.author.username),
                name: 'bill.jpeg'
            }]
    };
}
exports.run = run;
exports.help = 'Be like Bill. Note: The API I used has no "they" for some reason.';
exports.aliases = ['belikebill'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sS0FBSyxVQUFVLEdBQUcsQ0FBRSxPQUFnQjs7SUFDekMsT0FBTztRQUNMLEtBQUssRUFBRSxDQUFDO2dCQUNOLFVBQVUsRUFBRSx1REFBdUQsR0FBRyxrQkFBa0IsQ0FBQyxPQUFBLE9BQU8sQ0FBQyxNQUFNLDBDQUFFLFFBQVEsS0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDN0ksSUFBSSxFQUFFLFdBQVc7YUFDbEIsQ0FBQztLQUNKLENBQUE7QUFDRixDQUFDO0FBUEQsa0JBT0M7QUFDWSxRQUFBLElBQUksR0FBRyxtRUFBbUUsQ0FBQTtBQUMxRSxRQUFBLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBIn0=