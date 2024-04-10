import { markdownTable } from "markdown-table";

export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    const table: string[][] = [];
    table.push(["", "", "", ""]);

    const half = lastEntries.length / 2;
    for (let i = 0; i < half; i++) {
        const leftEntry = lastEntries[i];
        const rightEntry = lastEntries[i + half];
        table.push([
            `<img src="${leftEntry.media.coverImage.large}" alt="${leftEntry.media.title.english}" style="height:100px" />`,
            `${leftEntry.media.title.english} <br/> ${slashDateFormat(leftEntry.startedAt.date)} - ${slashDateFormat(leftEntry.completedAt.date)} (${daysAgo(leftEntry.completedAt.date)} days ago) <br/> ${leftEntry.score}`,
            `<img src="${rightEntry.media.coverImage.large}" alt="${rightEntry.media.title.english}" style="height:100px" />`,
            `${rightEntry.media.title.english} <br/> ${slashDateFormat(rightEntry.startedAt.date)} - ${slashDateFormat(rightEntry.completedAt.date)} (${daysAgo(rightEntry.completedAt.date)} days ago) <br/> ${rightEntry.score}`,
        ]);
    }

    const lastAnimes = markdownTable(table);

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
