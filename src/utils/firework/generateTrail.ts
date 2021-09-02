import { ColorOption } from "./getColor";
import { Rocket } from "./Rocket";
import { Trail } from "./Trail";
import { TrailEx } from "./TrailEx";
import { Vector2 } from "./Vector2";


interface TrailOption extends ColorOption {
    lifetime: number;
    mass: number;
}

interface ImageCache {
    [id: number]: HTMLImageElement
}

let imgCache: ImageCache = {};

function addImage(idx: number): HTMLImageElement {

    if (imgCache[idx]) return imgCache[idx];
    const img = new Image();
    img.src = "./spark/" + idx + ".png";
    imgCache[idx] = img;
    return img;
}

export function generateTrail(rocket: Rocket) {

    let trails = 30 + Math.floor(Math.random() * 30);
    let arr = [];
    let count = Math.ceil(Math.random() * 6) + 1;
    while (count--) {
        arr.push(Math.ceil(Math.random() * 10));
    }

    while (trails--) {
        let index = Math.floor(Math.random() * arr.length);
        let idx = arr[index];
        if (idx == 2 || idx == 6) {
            arr.splice(index, 1);
            if (arr.length < 1) {
                arr.push(Math.ceil(Math.random() * 10))
            }
        }
        rocket.children.push(getTrail(rocket.position.clone(), {
            idx,
            lifetime: 0.8 + Math.random() * 1.2,
            mass: .09
        }));
    }

}

function getTrail(position: Vector2, opt: TrailOption) {
    let { lifetime, mass } = opt;

    const direction = Math.random() * Math.PI * 2;
    const force = Math.random() * 128;
    const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);

    let pos = position.add(velocity.clone().multiplyScalar(0.25));

    if (opt.idx) {
        return new TrailEx(addImage(opt.idx), pos, velocity, lifetime, mass);

    }

    return new Trail(pos, velocity, lifetime, mass);
}