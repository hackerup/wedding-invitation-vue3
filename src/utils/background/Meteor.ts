export default class Meteor {

    ctx: CanvasRenderingContext2D;
    y = 0;
    h = 0;
    x = 0;
    vx = 0;
    vy = 0;
    len = 0;


    constructor(ctx: CanvasRenderingContext2D, x: number, h: number) {
        this.ctx = ctx;
        this.x = x;
        this.h = h;
        this.vx = -(4 + Math.random() * 4);
        this.vy = -this.vx;
        this.len = Math.random() * 200 + 100;
    }

    flow(): Boolean {
        if (this.y > this.h * 0.5) {
            let t = Math.random();
            if (t > 0.9) return false;
        }
        //判定流星出界
        if (this.x < -this.len || this.y > this.h + this.len) {
            return false;
        }

        this.x += this.vx;
        this.y += this.vy;
        return true
    }

    draw(): void {
        let ctx = this.ctx,
            //径向渐变，从流星头尾圆心，半径越大，透明度越高
            gra = ctx.createRadialGradient(
                this.x, this.y, 0, this.x, this.y, this.len);

        const PI = Math.PI;
        gra.addColorStop(0, 'rgba(255,255,255,1)');
        gra.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.save();
        ctx.fillStyle = gra;
        ctx.beginPath();
        //流星头，二分之一圆
        ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4);
        //绘制流星尾，三角形
        ctx.lineTo(this.x + this.len, this.y - this.len);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}