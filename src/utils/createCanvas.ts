export function createCanvas(ele: HTMLElement): HTMLCanvasElement {

    const dom = ele || document.body;
    const canvas = document.createElement('canvas');
    canvas.setAttribute("style", "position:absolute;top:0;");

    window.addEventListener("resize", function () {
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;
        const dpr = window.devicePixelRatio || 1;
        canvas.height = dpr * height;
        canvas.width = dpr * width;
        const context = canvas.getContext('2d')!;
        context.scale(dpr, dpr);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    })

    dom.appendChild(canvas);

    return canvas;
}

export function resize(): void {

    let myEvent = new Event('resize');
    
    window.dispatchEvent(myEvent);
}