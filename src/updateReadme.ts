import path from "path";
import { fileURLToPath } from "url";
import { generateCalendar } from "./calendar/generateCalendar";
import { generateLastAnimes } from "./lastAnimes/generateLastAnimes";
import { loadAnilistData } from "./loadAnilistData";
import { modifyFile } from "./modifyFile";

const entries = await loadAnilistData("bookpanda", "COMPLETED");
const calendar = generateCalendar(entries);
const lastAnimes = generateLastAnimes(entries);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let filePath = path.join(__dirname, "template/calendar.svg");
let outputFilePath = path.join(__dirname, "generated/calendar.svg");
const modCalendar = {
    "{{ calendar }}": calendar,
};

modifyFile(filePath, outputFilePath, modCalendar, (err) => {
    if (err) {
        console.error("Error modifying SVG:", err);
    } else {
        console.log("SVG modified successfully.");
    }
});

filePath = path.join(__dirname, "template/lastAnime.svg");
outputFilePath = path.join(__dirname, "generated/lastAnime.svg");
const modLastAnimes = {
    "{{ lastAnimes }}": lastAnimes,
};
modifyFile(filePath, outputFilePath, modLastAnimes, (err) => {
    if (err) {
        console.error("Error modifying SVG:", err);
    } else {
        console.log("SVG modified successfully.");
    }
});
