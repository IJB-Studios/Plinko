class Divisions {
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        Matter.World.add(world, this.body)
    } 
    display() {
        rectMode(CENTER)
        noStroke()
        fill("white")
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}