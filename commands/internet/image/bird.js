"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
exports.run = async () => ({
    files: [(await fetch('https://shibe.online/api/birds?urls=true&httpsUrls=true').then(res => res.json()))[0]]
});
exports.help = 'this bird DOES exist';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxHQUFHLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzNHLENBQUMsQ0FBQTtBQUNXLFFBQUEsSUFBSSxHQUFHLHNCQUFzQixDQUFBIn0=