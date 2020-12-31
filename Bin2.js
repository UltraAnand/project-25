class Bin2 {
    constructor(x, y, w, h) {
        var startic = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, startic)
        this.w = w
        this.h = h
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        push();
        fill("white")
        noStroke();
        rect(pos.x, pos.y, this.w, this.h);
        pop();
        

    }
}