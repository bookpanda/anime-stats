import { markdownTable } from "markdown-table";

export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    const table: string[][] = [];

    const half = lastEntries.length / 2;
    for (let i = 0; i < half; i++) {
        const leftEntry = lastEntries[i];
        const rightEntry = lastEntries[i + half];
        table.push([
            `<img src="${leftEntry.media.coverImage.large}" alt="${leftEntry.media.title.english}" style="height:100px" />`,
            `<a href="${leftEntry.media.siteUrl}" target="_blank"><b>${leftEntry.media.title.english}</b></a> <br/> ${slashDateFormat(leftEntry.startedAt.date)} - ${slashDateFormat(leftEntry.completedAt.date)} (${daysAgo(leftEntry.completedAt.date)} days ago) <br/> <h3>${leftEntry.score}/10</h3>`,
            `<img src="${rightEntry.media.coverImage.large}" alt="${rightEntry.media.title.english}" style="height:100px" />`,
            `<a href="${leftEntry.media.siteUrl}" target="_blank"><b>${rightEntry.media.title.english}</b></a> <br/> ${slashDateFormat(rightEntry.startedAt.date)} - ${slashDateFormat(rightEntry.completedAt.date)} (${daysAgo(rightEntry.completedAt.date)} days ago) <br/> <h3>${rightEntry.score}/10</h3>`,
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
