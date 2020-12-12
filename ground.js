function Ground(x)
{
    this.x = x;
    this.y = canvas.height-80;
    this.h = 60;
    this.w = 300;
    this.img = new Image();
    this.img.src = "ground.png";

    this.render = () => 
    {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    this.move = () =>
    {
        this.x -= 5 + speedUpRate;
    }
    this.stopMoving = () =>
    {
        this.move() = null;
    }
}