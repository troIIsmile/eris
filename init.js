"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const collection_1 = tslib_1.__importDefault(require("@discordjs/collection"));
const eris_1 = require("eris");
const fs_1 = require("fs");
const http_1 = require("http");
if (fs_1.existsSync('./.env')) {
    process.env = {
        ...process.env,
        ...Object.fromEntries(fs_1.readFileSync('./.env', 'utf-8')
            .split('\n')
            .filter(line => !line.startsWith('#') && line)
            .map(line => line.split('=')))
    };
}
if (process.env.REPLIT_DB_URL) {
    http_1.createServer((_, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(`<meta http-equiv="refresh" content="0;url=${require('./package.json').homepage}">`);
        res.end();
    }).listen(8080);
}
if (!process.env.TOKEN)
    process.exit();
const client = new eris_1.Client(process.env.TOKEN);
client.commands = new collection_1.default;
client.aliases = new collection_1.default;
fs_1.readdirSync('./events/')
    .filter(name => name.endsWith('.js'))
    .map(name => name.replace('.js', ''))
    .forEach(async (filename) => {
    const ev = (await Promise.resolve().then(() => tslib_1.__importStar(require('./events/' + filename)))).default;
    client.on(filename, context => {
        ev.call(client, context);
    });
});
client.connect();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0VBQStDO0FBQy9DLCtCQUE2QjtBQUM3QiwyQkFJWTtBQUNaLCtCQUFxRTtBQUlyRSxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUVwQixPQUFPLENBQUMsR0FBRyxHQUFHO1FBQ1osR0FBRyxPQUFPLENBQUMsR0FBRztRQUNkLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FFbkIsaUJBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDaEM7S0FDRixDQUFDO0NBQ0g7QUFHRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO0lBQzdCLG1CQUFZLENBQUMsQ0FBQyxDQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtRQUN2RCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqQixjQUFjLEVBQUUsV0FBVztTQUM1QixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsS0FBSyxDQUNQLDZDQUE2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUN2RSxJQUFJLENBQ0wsQ0FBQztRQUNGLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNqQjtBQUVELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7SUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7QUFFdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQVEsQ0FBQTtBQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQVUsQ0FBQTtBQUNoQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksb0JBQVUsQ0FBQTtBQUcvQixnQkFBVyxDQUFDLFdBQVcsQ0FBQztLQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3BDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDL0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxnRUFBYSxXQUFXLEdBQUcsUUFBUSxHQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDMUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUdMLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQSJ9