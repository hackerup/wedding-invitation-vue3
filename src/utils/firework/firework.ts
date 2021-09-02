import { Rocket } from "./Rocket";
import { Vector2 } from "./Vector2";
import { Time } from "../Time";
import { createCanvas } from "../createCanvas";

export function excuteFireworks(backCtx: CanvasRenderingContext2D): void {

    let canvas: HTMLCanvasElement, width: number, height: number;

    if (backCtx) {
        let backCanvas = backCtx.canvas!;
        canvas = backCanvas.cloneNode() as HTMLCanvasElement;
        width = backCanvas.clientWidth;
        height = backCanvas.clientHeight;
    }
    else {
        const dom = document.body;
        width = dom.offsetWidth;
        height = dom.offsetHeight;
        canvas = createCanvas(dom);
    }

    const context = canvas.getContext('2d')!;

    const time = new Time();
    let delta = 1 + Math.random() * 3;

    let rockets: Array<Rocket> = [];


    const addRocket = function () {

        if (time.elapsed < delta) return;

        delta = 1 + Math.random() * 3;
        time.start = time.previous;

        const position = new Vector2(Math.random() * width, height);
        const thrust = height * .75;
        const angle = Math.PI / -2 + (Math.random() - .5) * Math.PI / 8;
        const velocity = new Vector2(Math.cos(angle) * thrust, Math.sin(angle) * thrust);
        const lifetime = 3;

        rockets.push(new Rocket(position, velocity, lifetime));

        rockets = rockets.filter(function (rocket) {
            return rocket.isAlive;
        });
    };

    window.addEventListener("resize", function () {
        if (backCtx) {
            width = backCtx.canvas.clientWidth;
            height = backCtx.canvas.clientHeight;
        }
        else {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        }

    })

    const render = function () {
        requestAnimationFrame(render);

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        time.update();
        addRocket();

        rockets.forEach(function (rocket) {
            rocket.update(time);
            rocket.render(context);
        });

        if (backCtx) {
            backCtx.drawImage(canvas, 0, 0, context.canvas.width, context.canvas.height)
        }
    };

    requestAnimationFrame(render);
}