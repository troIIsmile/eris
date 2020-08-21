"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
exports.run = async () => ({
    files: [(await fetch('https://shibe.online/api/shibes?urls=true&httpsUrls=true').then(res => res.json()))[0]]
});
exports.help = 'this shibe DOES exist';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGliZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLEdBQUcsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRSxDQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUcsQ0FBQyxDQUFBO0FBQ1csUUFBQSxJQUFJLEdBQUcsdUJBQXVCLENBQUEifQ==