class Particle {
    constructor(x, y, diameter) {
        if (diameter==10) {
            var station = true
        } else {
            var station = false
        }
        console.log(station)
        var options = {
            restitution: 0.7,
            friction: 0.1,
            isStatic: station
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options)
        console.log(this.body.options)
        this.diameter = diameter
        if (!station) {
        this.colour = (Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)))
        } else {
            this.colour = (255, 255, 255)
        }
        Matter.World.add(world, this.body)
    }
    display(){
        var body = this.body
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(body.angle)
        noStroke()
        fill(this.colour)
        ellipseMode(CENTER)
        ellipse(0, 0, this.diameter, this.diameter)
        pop()
    }
}