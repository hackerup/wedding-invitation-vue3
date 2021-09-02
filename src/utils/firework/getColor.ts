
export interface ColorOption {
    idx?: number;
    // baseHue?: number;
}

export function getColor(opt: ColorOption = {}): string {

    let idx = opt.idx;

    switch (idx) {
        case 1: return "#f84";
        case 2: return "#84f";
        case 3: return "#8ff";
        case 4: return "#fff";
        case 5: return "#4f8";
        case 6: return "#f44";
        case 7: return "#f84";
        case 8: return "#84f";
        case 9: return "#fff";
        case 10: return "#44f";
    }

    // let baseHue = opt.baseHue;
    // if (baseHue) {
    //     const hue = Math.floor(baseHue + Math.random() * 15) % 360;
    //     const lightness = Math.floor(Math.pow(Math.random(), 2) * 50 + 50);
    //     return `hsl(${hue}, 100%, ${lightness}%`;
    // }

    const hue = Math.floor(Math.random() * 15 + 30);
    return `hsl(${hue}, 100%, 75%`;
}