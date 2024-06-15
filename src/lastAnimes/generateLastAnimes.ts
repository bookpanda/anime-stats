import { markdownTable } from "markdown-table";

export const generateLastAnimes = (
  entries: Entry[],
  start: number,
  end: number
) => {
  let lastEntries = entries.slice(-Math.min(entries.length, end));
  if (start > 0) {
    lastEntries = lastEntries.slice(0, -start);
  }
  lastEntries = lastEntries.reverse();

  const table: string[][] = [];
  table.push(["Cover", "Anime", "Cover", "Anime"]);

  for (let i = 0; i < lastEntries.length; i += 2) {
    const leftEntry = lastEntries[i];
    const rightEntry = lastEntries[i + 1];
    table.push([
      genImage(leftEntry),
      genInfo(leftEntry),
      genImage(rightEntry),
      genInfo(rightEntry),
    ]);
  }
  const lastAnimes = markdownTable(table, {
    align: ["c", "l", "c", "l"],
  });

  return lastAnimes;
};

const slashDateFormat = (date: Date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const daysAgo = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const genImage = (entry: Entry) => {
  try {
    return `<img src="${entry.media.coverImage.large}" alt="${entry.media.title.english}" style="width:70px;height:auto" />`;
  } catch (e) {
    console.error("Error generating image:", e);
    return "";
  }
};

const genInfo = (entry: Entry) => {
  try {
    return `<a href="${entry.media.siteUrl}" target="_blank"><b>${entry.media.title.english ?? entry.media.title.userPreferred}</b></a> <br/> ${slashDateFormat(entry.startedAt.date)} - ${slashDateFormat(entry.completedAt.date)} (${daysAgo(entry.completedAt.date)} days ago) <br/> <h3>${entry.score}/10</h3>`;
  } catch (e) {
    console.error("Error generating info:", e);
    return "";
  }
};
