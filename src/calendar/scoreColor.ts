export const scoreColor = (score: number) => {
  if (score <= 5) return ["rgb(211, 44, 44)", "rgb(211, 44, 44)"];

  const max = Math.ceil(score).toString();
  const min = Math.floor(score).toString();
  const range = [
    (colorRange[max].red - colorRange[min].red) / 10,
    (colorRange[max].green - colorRange[min].green) / 10,
    (colorRange[max].blue - colorRange[min].blue) / 10,
  ];
  const step = (score - Math.floor(score)) * 10;
  const red = Math.floor(colorRange[min].red + range[0] * step);
  const green = Math.floor(colorRange[min].green + range[1] * step);
  const blue = Math.floor(colorRange[min].blue + range[2] * step);
  return [
    `rgb(${red}, ${green}, ${blue})`,
    `rgb(${red * 0.9}, ${green * 0.9}, ${blue * 0.9})`,
  ];
};

const colorRange: {
  [field: string]: { red: number; green: number; blue: number };
} = {
  "10": {
    red: 32,
    green: 110,
    blue: 57,
  },
  "9": {
    red: 49,
    green: 161,
    blue: 78,
  },
  "8": {
    red: 155,
    green: 233,
    blue: 168,
  },
  "7": {
    red: 247,
    green: 234,
    blue: 53,
  },
  "6": {
    red: 247,
    green: 160,
    blue: 153,
  },
  "5": {
    red: 211,
    green: 44,
    blue: 44,
  },
};
