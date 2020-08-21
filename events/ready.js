"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const random_1 = tslib_1.__importDefault(require("../utils/random"));
const messages_1 = require("../messages");
const rreaddir_1 = require("../utils/rreaddir");
async function activityChanger() {
    this.editStatus("online", {
        type: 3,
        name: random_1.default(messages_1.all)
    });
    setTimeout(() => activityChanger.call(this), 900000);
}
async function default_1() {
    activityChanger.call(this);
    const files = await rreaddir_1.rreaddir('./commands/');
    let count = 0;
    const entries = await Promise.all(files
        .filter(filename => filename.endsWith('.js'))
        .map(async (file) => [
        file.replace('.js', '').replace(/^.*[\\\/]/, ''),
        {
            help: 'A command without a description',
            ...(await Promise.resolve().then(() => tslib_1.__importStar(require(`../${file}`)))),
            path: require.resolve('../' + file)
        }
    ]));
    entries.forEach(([name, command]) => {
        var _a;
        this.commands.set(name, command);
        const dec = ++count / entries.length;
        console.log(`[${'█'.repeat(dec * 10).padEnd(10)}]`, 'Loading commands...', `(${count}/${entries.length} commands loaded)`);
        (_a = command.aliases) === null || _a === void 0 ? void 0 : _a.forEach(alias => {
            this.aliases.set(alias, name);
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxRUFBcUM7QUFFckMsMENBQWtDO0FBQ2xDLGdEQUE2QztBQUM3QyxLQUFLLFVBQVUsZUFBZTtJQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUN4QixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxnQkFBTSxDQUFDLGNBQUcsQ0FBQztLQUNsQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBR2MsS0FBSztJQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxNQUFNLE9BQU8sR0FBMkIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUN2RCxLQUFLO1NBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBaUMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQ2hEO1lBQ0UsSUFBSSxFQUFFLGlDQUFpQztZQUN2QyxHQUFHLENBQUMsZ0VBQWEsTUFBTSxJQUFJLEVBQUUsR0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDcEM7S0FDRixDQUFDLENBQ3FCLENBQUM7SUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBdUIsRUFBRSxFQUFFOztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sbUJBQW1CLENBQUMsQ0FBQztRQUMzSCxNQUFBLE9BQU8sQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBeEJELDRCQXdCQyJ9