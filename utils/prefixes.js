"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
if (!fs_1.existsSync('./prefixes.json'))
    fs_1.writeFileSync('./prefixes.json', '{}');
const prefixes = new Proxy({}, {
    get(_, name) {
        return require('../prefixes.json')[name];
    },
    set(_, prop, value) {
        let data = require('../prefixes.json');
        data[prop] = value;
        fs_1.writeFileSync('./prefixes.json', JSON.stringify(data, null, 2));
        return true;
    }
});
exports.default = prefixes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmVmaXhlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFrRTtBQUVsRSxJQUFJLENBQUMsZUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQUUsa0JBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQU0vRCxNQUFNLFFBQVEsR0FBYSxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUU7SUFDdkMsR0FBRyxDQUFFLENBQUMsRUFBRSxJQUFJO1FBQ1YsT0FBTyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsR0FBRyxDQUFFLENBQUMsRUFBRSxJQUFZLEVBQUUsS0FBVTtRQUM5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsa0JBQWUsUUFBUSxDQUFDIn0=