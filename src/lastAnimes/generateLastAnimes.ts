export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    let lastAnimes = `<div class="la-container">`;
    let idx = 0;
    for (const entries of lastEntries) {
        if (idx === 5) {
            lastAnimes += `</div>\n<div class="la-container">`;
        }
        lastAnimes += `
        <div class="la-entry">
            <div class="la-row">
                <h4 class="anime-title">${entries.media.title.english}</h4>
                <h3>${entries.score}</h3>
            </div>
            <p>${slashDateFormat(entries.startedAt.date)} - ${slashDateFormat(entries.completedAt.date)}</p>
        </div>\n`;
        idx++;
    }
    lastAnimes += `</div>`;

    return lastAnimes;
};

const slashDateFormat = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
