import { Time } from "../Time";
import { generateTrail } from "./generateTrail";
import { getColor } from "./getColor";
import { Particle } from "./Particle";
import { Trail } from "./Trail"
import { Vector2 } from "./Vector2";

function explosion(trail: Trail) {

    const position = trail.position.clone();
    const velocity = trail.velocity.clone().multiplyScalar(-.1);
    velocity.x += (Math.random() - .5) * 8;
    const color = getColor();
    const radius = 1 + Math.random();
    const lifetime = .5 + Math.random() * .5;
    const mass = .01;

    trail.children.push(new Particle(position, velocity, color, radius, lifetime, mass));
}

export class Rocket extends Trail {

    lifetime = 10;

    constructor(position: Vector2, velocity = new Vector2, lifetime = 10) {

        super(position, velocity);

        this.lifetime = lifetime;
    }

    update(time: Time) {
        if (this.getRemainingLifetime() && this.velocity.y > 0) {

            generateTrail(this);

            this.lifetime = 0;
        }

        super.update(time);
    }
}
