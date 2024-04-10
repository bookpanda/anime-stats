import { cssClasses } from "./cssClasses";

export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    let lastAnimes = `<div class="la-main">
        <div class="la-container">`;
    let idx = 0;
    for (const entry of lastEntries) {
        if (idx === 5) {
            lastAnimes += `</div>\n<div class="la-container">`;
        }
        lastAnimes += `<div class="la-entry">
            <img src="${entry.media.coverImage.large}" alt="${entry.media.title.english}" class="anime-cover" />
            <div class="la-row">
                <div>
                    <a href="${entry.media.siteUrl}"><h4 class="anime-title">${entry.media.title.english}</h4></a>
                    <p>${slashDateFormat(entry.startedAt.date)} - ${slashDateFormat(entry.completedAt.date)} (${daysAgo(entry.completedAt.date)} days ago)</p>
                </div>
                <h3>${entry.score}</h3>
            </div>
        </div>\n`;
        idx++;
    }
    lastAnimes += `\t</div>\n</div>`;

    for (const ccs of cssClasses) {
        lastAnimes = lastAnimes.replace(
            new RegExp(`class="${ccs.name}"`, "g"),
            `style="${ccs.css}"`
        );
    }

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
