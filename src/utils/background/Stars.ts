export default class Stars {

    width = 0;
    height = 0;
    ctx: CanvasRenderingContext2D;
    amount: number;
    stars: Array<Star> = [];

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number, amount: number) {
        this.ctx = ctx;
        this.amount = amount;
        this.resize(width, height);
    }

    resize(width: number, height: number): void {
        this.width = width
        this.height = height
        this.stars = this.getStars(this.amount)
    }

    getStars(amount: number): Array<Star> {
        let stars = []
        while (amount--) {
            stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() + 0.2
            })
        }
        return stars
    }

    draw(): void {
        let ctx = this.ctx
        ctx.save()
        ctx.fillStyle = 'white'
        this.stars.forEach(star => {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
            ctx.fill()
        })
        ctx.restore()
    }

    //闪烁，星星半径每隔10帧随机变大或变小
    blink(): void {
        this.stars = this.stars.map(star => {
            let sign = Math.random() > 0.5 ? 1 : -1
            star.r += sign * 0.2
            if (star.r < 0) {
                star.r = -star.r
            } else if (star.r > 1) {
                star.r -= 0.2
            }
            return star
        })

    }
}