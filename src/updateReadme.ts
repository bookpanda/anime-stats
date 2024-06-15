import path from "path";
import { fileURLToPath } from "url";
import { generateCalendar } from "./calendar/generateCalendar";
// import data from "./data/data.json";
import { ANILIST_USERNAME } from "../config/config";
import { generateLastAnimes } from "./lastAnimes/generateLastAnimes";
import { loadAnilistData } from "./loadAnilistData";
import { modifyFile } from "./modifyFile";

const entries = await loadAnilistData(ANILIST_USERNAME, "COMPLETED");
// const entries: Entry[] = [];
// for (const entry of data) {
//   const a: Entry = {
//     id: entry.id,
//     status: entry.status,
//     progress: entry.progress,
//     media: {
//       title: {
//         english: entry.media.title.english || "",
//         userPreferred: entry.media.title.userPreferred || "",
//       },
//       coverImage: {
//         color: entry.media.coverImage.color || "",
//         large: entry.media.coverImage.large,
//       },
//       episodes: entry.media.episodes,
//       siteUrl: entry.media.siteUrl,
//     },
//     startedAt: {
//       date: new Date(entry.startedAt.date),
//       day: entry.startedAt.day,
//       month: entry.startedAt.month,
//       year: entry.startedAt.year,
//     },
//     completedAt: {
//       date: new Date(entry.completedAt.date),
//       day: entry.completedAt.day,
//       month: entry.completedAt.month,
//       year: entry.completedAt.year,
//     },
//     score: entry.score,
//   };
//   entries.push(a);
// }
const calendar = generateCalendar(entries);
const last10Animes = generateLastAnimes(entries, 0, 10);
const last100Animes = generateLastAnimes(entries, 10, 100);

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

filePath = path.join(__dirname, "template/README.md");
outputFilePath = path.join(__dirname, "../README.md");
const modLastAnimes = {
  "{{ last10Animes }}": last10Animes,
  "{{ last100Animes }}": last100Animes,
};
modifyFile(filePath, outputFilePath, modLastAnimes, (err) => {
  if (err) {
    console.error("Error modifying SVG:", err);
  } else {
    console.log("SVG modified successfully.");
  }
});
