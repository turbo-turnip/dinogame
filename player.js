function Player()
{
    this.x = 60;
    this.y = 100;
    this.w = 40;
    this.h = 40;
    this.img = new Image();
    this.img.src = "dino.png";
    this.audio = new Audio();
    this.audio.src = "jump.mp3";

    this.vel = 0;

    this.jump = () =>
    {
        this.vel += -gravity * 20;
        this.audio.play();
    }
    this.render = () => 
    {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    this.applyPhysics = () =>
    {
        this.vel += gravity;
        this.y += this.vel;

        if (this.y > 230)
        {
            this.vel = 0;
            this.y = 230;
        }
    }
}