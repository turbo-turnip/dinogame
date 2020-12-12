function Cactus(x)
{
    this.x = x;
    this.y = 220;
    this.w = 36;
    this.h = 50;
    this.img = new Image();
    this.img.src = "cactus.png";

    this.render = () => 
    {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    this.move = () => 
    {
        this.returnValue = this.x -= 5 + speedUpRate;
        return this.returnValue;
    }
}