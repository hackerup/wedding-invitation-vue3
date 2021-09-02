export class Vector2 {

    x = 0;
    y = 0;
    
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2): Vector2 {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    multiplyScalar(s: number): Vector2 {
        this.x *= s;
        this.y *= s;
        return this;
    }

    clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }
}