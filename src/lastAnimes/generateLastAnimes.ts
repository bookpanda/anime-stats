export const generateLastAnimes = (entries: Entry[]) => {
    const lastEntries = entries.slice(-10).reverse();
    let lastAnimes = "";
    for (const entries of lastEntries) {
        lastAnimes += `
        <div class="la-entry">
            <div class="la-row">
                <h4>${entries.media.title.english}</h4>
                <h3>${entries.score}</h3>
            </div>
        </div>\n`;
        console.log(
            entries.media.title.english,
            entries.media.coverImage.large
        );
    }

    return lastAnimes;
};
