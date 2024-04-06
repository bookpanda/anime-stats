export const scoreColor = (score: number) => {
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
        red: 100,
        green: 211,
        blue: 44,
    },
    "9": {
        red: 128,
        green: 210,
        blue: 45,
    },
    "8": {
        red: 155,
        green: 211,
        blue: 45,
    },
    "7": {
        red: 183,
        green: 211,
        blue: 44,
    },
    "6": {
        red: 210,
        green: 210,
        blue: 46,
    },
    "5": {
        red: 211,
        green: 183,
        blue: 44,
    },
    "4": {
        red: 210,
        green: 155,
        blue: 44,
    },
    "3": {
        red: 211,
        green: 127,
        blue: 44,
    },
    "2": {
        red: 210,
        green: 100,
        blue: 45,
    },
    "1": {
        red: 211,
        green: 72,
        blue: 45,
    },
};
