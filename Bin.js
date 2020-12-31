class Bin {
    constructor(x, y, w, h) {
        var startic = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, startic)
        this.w = w
        this.h = h
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        push();
        imageMode(CENTER);
       // image(this.image,pos.x, pos.y, this.w, this.h);
       this.image.resize(200,100)
       image(this.image,pos.x,650,this.w,100);
        pop();
        

    }
}

