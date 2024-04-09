export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    let lastAnimes = `<div class="la-container">`;
    let idx = 0;
    for (const entry of lastEntries) {
        if (idx === 5) {
            lastAnimes += `</div>\n<div class="la-container">`;
        }
        lastAnimes += `<div class="la-entry">
            <div class="la-row">
                <a href="${entry.media.siteUrl}"><h4 class="anime-title">${entry.media.title.english}</h4></a>
                <h3>${entry.score}</h3>
            </div>
            <p>${slashDateFormat(entry.startedAt.date)} - ${slashDateFormat(entry.completedAt.date)} (${daysAgo(entry.completedAt.date)} days ago)</p>
        </div>\n`;
        idx++;
    }
    lastAnimes += `</div>`;

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
