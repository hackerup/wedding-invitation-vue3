import { Trail } from "./Trail";
import { Vector2 } from "./Vector2";

export class TrailEx extends Trail {

    image: HTMLImageElement;
    size: number;

    constructor(image: HTMLImageElement, position: Vector2, velocity = new Vector2(), lifetime = 1, mass = 1) {
        super(position, velocity, lifetime, mass);

        this.image = image;
        this.size = 60 + Math.random() * 60;
    }

    render(context: CanvasRenderingContext2D): void {
        super.render(context);

        this.size /= 1.01;
        let size = this.size;
        let remain = this.getRemainingLifetime();
        if (remain > 0.3) {
            context.globalAlpha = 0.3;
        }
        context.drawImage(this.image, this.position.x - size / 2, this.position.y - size / 2, size, size);
    }
}