"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.run = void 0;
exports.run = async () => ({
    files: [(await fetch('https://shibe.online/api/cats?urls=true&httpsUrls=true').then(res => res.json()))[0]]
});
exports.help = 'this cat DOES exist';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsR0FBRyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQSxFQUFFLENBQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxRyxDQUFDLENBQUE7QUFDVyxRQUFBLElBQUksR0FBRyxxQkFBcUIsQ0FBQSJ9