import path from "path";
import { fileURLToPath } from "url";
import { generateCalendar } from "./calendar/generateCalendar";
import { loadAnilistData } from "./loadAnilistData";
import { modifySVG } from "./modifySVG";

const entries = await loadAnilistData("bookpanda", "COMPLETED");
const calendar = generateCalendar(entries);

console.log(entries);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "template/calendar.svg");
const outputFilePath = path.join(__dirname, "generated/calendar.svg");
const modifications = {
    "{{ calendar }}": calendar,
};

modifySVG(filePath, outputFilePath, modifications, (err) => {
    if (err) {
        console.error("Error modifying SVG:", err);
    } else {
        console.log("SVG modified successfully.");
    }
});
