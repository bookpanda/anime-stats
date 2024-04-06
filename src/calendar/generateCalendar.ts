import { scoreColor } from "./scoreColor";

export const generateCalendar = (entries: Entry[]) => {
    const now = new Date();
    const startDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 365
    );
    const scoreSlots: { [day: string]: number } = {};
    for (
        let day = startDate;
        day <= now;
        day = new Date(day.getTime() + 1000 * 3600 * 24)
    ) {
        scoreSlots[day.toDateString()] = 0;
    }
    for (const entry of entries) {
        const score = entry.score;
        const startedAt = entry.startedAt.date;
        const completedAt = entry.completedAt.date;
        for (
            let day = startedAt;
            day <= completedAt;
            day = new Date(day.getTime() + 1000 * 3600 * 24)
        ) {
            if (scoreSlots[day.toDateString()] < score) {
                scoreSlots[day.toDateString()] = score;
            }
        }
    }

    let calendar = `<div class="col">\n`;
    if (startDate.getDay() !== 0) {
        for (let i = 0; i < startDate.getDay(); i++) {
            calendar += `\t<div class="box empty" />\n`;
        }
    }
    console.log(scoreSlots);

    for (const daySlot in scoreSlots) {
        const score = scoreSlots[daySlot];
        const day = new Date(daySlot);
        if (day.getDay() === 0 && day !== startDate) {
            calendar += `<div class="col">\n`;
        }
        if (score === 0) {
            calendar += `\t<div class="box empty" />\n`;
        } else {
            let colors = scoreColor(score);
            calendar += `\t<div class="box" style="background-color:${colors[0]}; border:1px solid ${colors[1]};"/>\n`;
        }
        if (day.getDay() === 6) {
            calendar += `</div>\n`;
        }
    }

    // let entryIdx = 0;
    // for (
    //     let day = startDate;
    //     day <= now;
    //     day = new Date(day.getTime() + 1000 * 3600 * 24)
    // ) {
    //     if (day.getDay() === 0 && day !== startDate) {
    //         calendar += `<div class="col">\n`;
    //     }
    //     if (entries[entryIdx].startedAt.date > day) {
    //         calendar += `\t<div class="box" />\n`;
    //         continue;
    //     }
    //     const score = entries[entryIdx].score;
    //     console.log(score);
    //     let color = scoreColor(score);
    //     calendar += `\t<div class="box" style="background-color:${color}"/>\n`;

    //     if (entries[entryIdx].completedAt.date.getTime() === day.getTime()) {
    //         entryIdx++;
    //     }
    //     if (day.getDay() === 6) {
    //         calendar += `</div>\n`;
    //     }

    //     console.log(
    //         day.toDateString(),
    //         day.getDay(),
    //         entries[entryIdx].completedAt.date.toDateString(),
    //         entries[entryIdx].media.title.english
    //     );
    //     // console.log(entries[entryIdx]);
    // }

    return calendar;
};
