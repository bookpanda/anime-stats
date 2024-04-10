import { markdownTable } from "markdown-table";

export const generateLastAnimes = (entries: Entry[]) => {
  const lastEntries = entries.slice(-10).reverse();
  const table: string[][] = [];
  table.push(["Cover", "Anime", "Cover", "Anime"]);

  const half = lastEntries.length / 2;
  for (let i = 0; i < half; i++) {
    const leftEntry = lastEntries[i];
    const rightEntry = lastEntries[i + half];
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
  return `<img src="${entry.media.coverImage.large}" alt="${entry.media.title.english}" style="width:70px;height:auto" />`;
};

const genInfo = (entry: Entry) => {
  return `<a href="${entry.media.siteUrl}" target="_blank"><b>${entry.media.title.english}</b></a> <br/> ${slashDateFormat(entry.startedAt.date)} - ${slashDateFormat(entry.completedAt.date)} (${daysAgo(entry.completedAt.date)} days ago) <br/> <h3>${entry.score}/10</h3>`;
};
