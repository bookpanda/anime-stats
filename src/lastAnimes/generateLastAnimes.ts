export const generateLastAnimes = (entries: Entry[]) => {
    //get 10 last animes in arr
    const lastAnimes = entries.slice(-10);
    for (const anime of lastAnimes) {
        console.log(anime.media.title.english);
    }

    return "";
};
