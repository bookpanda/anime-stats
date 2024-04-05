export const generateCalendar = (entries: Entry[]) => {
    const now = new Date();
    const startDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 365
    );
    let calendar = `<div class="col">\n`;
    if (startDate.getDay() !== 0) {
        for (let i = 0; i < startDate.getDay(); i++) {
            calendar += `\t<div class="box empty" />\n`;
        }
    }

    let entryIdx = 0;
    for (
        let day = startDate;
        day <= now;
        day = new Date(day.getTime() + 1000 * 3600 * 24)
    ) {
        if (day.getDay() === 0 && day !== startDate) {
            calendar += `<div class="col">\n`;
        }
        if (entries[entryIdx].startedAt.date > day) {
            calendar += `\t<div class="box" />\n`;
            continue;
        }
        calendar += `\t<div class="box" style="background-color:rgb(122,0,0)"/>\n`;
        const score = entries[entryIdx].score;
        let color = [];
        if (score >= 90) {
            const max = [1, 2, 3];
            const min = [1, 2, 3];
            const range = [
                (max[0] - min[0]) / 10,
                (max[1] - min[1]) / 10,
                (max[2] - min[2]) / 10,
            ];
            const step = score - 90;
            color = [
                min[0] + range[0] * step,
                min[1] + range[1] * step,
                min[2] + range[2] * step,
            ];
        }
        if (entries[entryIdx].completedAt.date === day) {
            entryIdx++;
        }
        if (day.getDay() === 6) {
            calendar += `</div>\n`;
        }

        console.log(day.toDateString(), day.getDay());
    }

    return calendar;
};
