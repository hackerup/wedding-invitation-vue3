import Moon from "./Moon";
import Stars from "./Stars";
import Meteor from "./Meteor";
import Mountain from "./Mountain";
import { createCanvas, resize } from "../createCanvas";
import { Time } from "../Time";

export function drawBackground(): CanvasRenderingContext2D {
    const dom = document.body;
    let width = dom.offsetWidth;
    let height = dom.offsetHeight;
    const canvas = createCanvas(dom); //烟花
    const context = canvas.getContext('2d')!;

    let moon = new Moon(context, width, height),
        mountain = new Mountain(context, width, height),
        stars = new Stars(context, width, height * 0.4, 30),
        meteors: Array<Meteor> = [],
        count = 0;

    window.addEventListener("resize", function () {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        moon.resize(width, height);
        mountain.resize(width, height);
        stars.resize(width, height * 0.4);
    })
    resize();

    const time = new Time();
    let delta = Math.random() * 10;

    //流星生成函数
    const meteorGenerator = () => {

        time.update();

        if (time.elapsed < delta) return;

        delta = 3 + Math.random() * 10;
        time.start = time.previous;

        //x位置偏移，以免经过月亮
        let x = Math.random() * width / 3 + 400
        meteors.push(new Meteor(context, x, height));
    }

    const render = function () {
        requestAnimationFrame(render);

        let skyGradient = context.createLinearGradient(0, 0, 0, canvas.height);        
        skyGradient.addColorStop(0.3, '#08254d');
        skyGradient.addColorStop(1, '#00111e');
        context.fillStyle = skyGradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        count++;
        count % 10 == 0 && stars.blink();
        moon.draw();
        mountain.draw();
        stars.draw();
        meteorGenerator();
        meteors.forEach((meteor, index, arr) => {
            //如果流星离开视野之内，销毁流星实例，回收内存
            if (meteor.flow()) {
                meteor.draw()
            } else {
                arr.splice(index, 1)
            }
        })
    };

    requestAnimationFrame(render);

    return context;
}