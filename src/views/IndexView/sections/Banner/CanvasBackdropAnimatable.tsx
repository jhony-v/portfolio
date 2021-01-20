import React from "react"
import Sketch from "react-p5"
import p5Types from "p5"

interface ParticleProps {
  maxX: number
  maxY: number
}
function Particle(p5: p5Types, particleProps: ParticleProps) {
  this.p5 = p5
  this.particleProps = particleProps
  this.size = p5.random(200)
  this.x = p5.random(0, particleProps.maxX)
  this.y = p5.random(0, particleProps.maxY)
  this.vx = p5.random(-1, 1)
  this.vy = p5.random(-1, 1)
  this.acceleration = 1;
}

Particle.prototype.draw = function () {
  this.p5.noStroke()
  this.p5.fill("rgba(200,200,200,.08)")
  this.p5.circle(this.x, this.y, this.size)
}

Particle.prototype.move = function () {
  
  if(this.p5.dist(this.p5.mouseX,this.p5.mouseY,this.x,this.y) <= this.size) this.acceleration = this.p5.random(10,15);
  if(this.acceleration > 1)  this.acceleration-= 1;
  
  if (this.x <= 0) this.vx += this.acceleration
  if (this.x >= this.particleProps.maxX) this.vx -= this.acceleration
  if (this.y <= 0) this.vy += this.acceleration
  if (this.y >= this.particleProps.maxY) this.vy -= this.acceleration
  
  this.x += this.vx * this.acceleration
  this.y += this.vy * this.acceleration
}

const CanvasBackdropAnimatable = () => {
  let particles = []
  let total = 15

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    let maxX = window.innerWidth
    let maxY = window.innerHeight
    p5.createCanvas(maxX, maxY).parent(canvasParentRef)
    particles = [...Array(total)].map(() => new Particle(p5, { maxX, maxY }))
  }
  const draw = (p5: p5Types) => {
    p5.background(0)
    particles.forEach(particle => {
      particle.draw()
      particle.move()
    })
  }

  return (
    <div className="absolute left-0 top-0 overflow-hidden">
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}

export default CanvasBackdropAnimatable
