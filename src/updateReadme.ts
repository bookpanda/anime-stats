import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "path";
import { modifySVG } from "./modifySVG";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data/data.json");
const data = fs.readFileSync(dataPath);
// for (const a of data.entries()) {
//     console.log(a);
// }

const filePath = path.join(__dirname, "template/calendar.svg");
const outputFilePath = path.join(__dirname, "generated/calendar.svg");
const modifications = {
    calendar: "new_calendar",
};

modifySVG(filePath, outputFilePath, modifications, (err) => {
    if (err) {
        console.error("Error modifying SVG:", err);
    } else {
        console.log("SVG modified successfully.");
    }
});
