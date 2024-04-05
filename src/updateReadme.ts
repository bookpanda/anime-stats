import path from "path";
import { loadAnilistData } from "./loadAnilistData";
import { modifySVG } from "./modifySVG";

const entries = await loadAnilistData("bookpanda", "COMPLETED");
console.log(entries);

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
