"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rreaddir = void 0;
const path_1 = require("path");
const promises_1 = require("fs/promises");
async function rreaddir(dir, allFiles = []) {
    const files = (await promises_1.readdir(dir)).map((file) => path_1.join(dir, file));
    allFiles.push(...files);
    await Promise.all(files.map(async (file) => ((await promises_1.stat(file)).isDirectory() && rreaddir(file, allFiles))));
    return allFiles;
}
exports.rreaddir = rreaddir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnJlYWRkaXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJycmVhZGRpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBNEI7QUFDNUIsMENBQTRDO0FBQ3JDLEtBQUssVUFBVSxRQUFRLENBQUUsR0FBVyxFQUFFLFdBQXFCLEVBQUU7SUFDbEUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLGtCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDeEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sZUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNySCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBTEQsNEJBS0MifQ==