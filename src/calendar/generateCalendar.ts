import { DENSITY_FACTOR } from "../../config/config";
import { scoreColor } from "./scoreColor";

export const generateCalendar = (entries: Entry[]) => {
  const now = new Date();
  const startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 365
  );
  const scoreSlots: { [day: string]: number } = {};
  const countSlots: { [day: string]: number } = {};
  const densitySlots: { [day: string]: number } = {};
  for (
    let day = startDate;
    day <= now;
    day = new Date(day.getTime() + 1000 * 3600 * 24)
  ) {
    scoreSlots[day.toDateString()] = 0;
    countSlots[day.toDateString()] = 0;
    densitySlots[day.toDateString()] = 0;
  }
  for (const entry of entries) {
    const score = entry.score;
    const startedAt = entry.startedAt.date;
    const completedAt = entry.completedAt.date;
    const daysBetween =
      (completedAt.getTime() - startedAt.getTime()) / (1000 * 60 * 60 * 24);
    const density = Math.min(
      (entry.media.episodes * DENSITY_FACTOR) / (daysBetween + 1),
      1
    );
    console.log(
      `daysBetween: ${daysBetween}, eps: ${entry.media.episodes}, density: ${density}`
    );

    // let day = startedAt;
    // if (day < startDate) day = startDate;
    let day = new Date(Math.max(startedAt.getTime(), startDate.getTime()));

    for (
      ;
      day <= completedAt;
      day = new Date(day.getTime() + 1000 * 3600 * 24)
    ) {
      const dateStr = day.toDateString();
      let cou = countSlots[dateStr];
      let oldScore = scoreSlots[dateStr];
      scoreSlots[dateStr] = (oldScore * cou + score) / (cou + 1);
      countSlots[dateStr]++;
      densitySlots[dateStr] = density;
    }
  }

  let calendar = `<div class="col">\n`;
  calendar += `\t<div class="time-box"><p class="time-legend">${monthAbbr(startDate)}</p></div>\n`;
  const seenMonths = new Set<number>();
  seenMonths.add(startDate.getMonth());
  if (startDate.getDay() !== 0) {
    for (let i = 0; i < startDate.getDay(); i++) {
      calendar += `\t<div class="box invisible" />\n`;
    }
  }

  for (const daySlot in scoreSlots) {
    const score = scoreSlots[daySlot];
    const day = new Date(daySlot);
    const density = densitySlots[daySlot];
    if (day.getDay() === 0 && !isSameDay(day, startDate)) {
      calendar += `<div class="col">\n`;
      if (!seenMonths.has(day.getMonth())) {
        seenMonths.add(day.getMonth());
        calendar += `\t<div class="time-box"><p class="time-legend">${monthAbbr(day)}</p></div>\n`;
      } else {
        calendar += `\t<div class="time-box"></div>\n`;
      }
    }
    if (score === 0) {
      calendar += `\t<div class="box empty" />\n`;
    } else {
      let colors = scoreColor(score);
      calendar += `\t<div class="box" style="background-color:${colors[0]}; border:1px solid ${colors[1]}; opacity:${density};"/>\n`;
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

const monthAbbr = (date: Date) => {
  return date.toLocaleString("default", { month: "short" });
};
