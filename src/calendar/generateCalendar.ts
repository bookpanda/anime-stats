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

    let calendar = `<div class="col">\n\t<div class="box empty" />\n`;
    if (startDate.getDay() !== 0) {
        for (let i = 0; i < startDate.getDay(); i++) {
            calendar += `\t<div class="box invisible" />\n`;
        }
    }
    console.log(scoreSlots);

    for (const daySlot in scoreSlots) {
        const score = scoreSlots[daySlot];
        const day = new Date(daySlot);
        if (day.getDay() === 0 && !isSameDay(day, startDate)) {
            calendar += `<div class="col">\n\t<div class="box empty" />\n`;
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
    if (now.getDay() !== 6) calendar += `</div>\n`;

    return calendar;
};

const isSameDay = (a: Date, b: Date) => {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
};
