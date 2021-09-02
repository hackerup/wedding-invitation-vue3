import { Time } from "../Time";
import { generateParticle } from "./generateParticle";
import { Particle } from "./Particle";
import { Vector2 } from "./Vector2";

export class Trail extends Particle {

    isAlive = false;
    children: Array<Particle>;

    constructor(position: Vector2, velocity = new Vector2(), lifetime = 1, mass = 1) {
        super(position, velocity);

        this.children = [];
        this.lifetime = lifetime;
        this.mass = mass;

        this.isAlive = true;
    }

    update(time: Time) {

        super.update(time);

        // Add a new child on every frame
        if (this.isAlive && this.getRemainingLifetime()) {
            this.children.push(generateParticle(this, {
                lifetime: .5 + Math.random() * .5,
                mass: .01
            }))
        }

        // Remove particles that are dead
        this.children = this.children.filter(function (child: Particle) {

            if (child instanceof Trail) {
                return child.isAlive;
            }

            return child.getRemainingLifetime();
        });

        // Kill trail if all particles fade away
        if (!this.children.length) {
            this.isAlive = false;
        }

        // Update particles
        this.children.forEach(function (child: Particle) {
            child.update(time);
        });
    }

    render(context: CanvasRenderingContext2D) {
        // Render all children
        this.children.forEach(function (child: Particle) {
            child.render(context);
        });
    }
}