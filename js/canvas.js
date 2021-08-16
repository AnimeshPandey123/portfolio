

const canvas = document.getElementById('header-canvas');
const c = canvas.getContext('2d');

// let header = document.querySelectorAll("header")[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// const parent = canvas.parentElement


// console.log(parent)

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66', '#afc9ff', '#c7d8ff', '#ffe5cf']

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  let num = 300;
  // console.log({'width':innerWidth})

  if(innerWidth < 500){
     num = 100;
  }

  init(num)
})

let mousedown = false;
// addEventListener('mousedown', () => {
//     // console.log('mousedown')
//     mousedown = true;
//   })

//   addEventListener('mouseup', () => {

//     // console.log('mouseup')
//     mousedown = false;
//   })

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.shadowColor = this.color
    c.shadowBlur=15
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let particles
function init(numbers=300) {
  // console.log(numbers)
  particles = []

  for (let i = 0; i < numbers; i++) {
      const canvasWidth = canvas.width + 400;
      const canvasHeight = canvas.height + 400;
      const x = Math.random() * canvasWidth - canvasWidth/2;
      const y = Math.random() * canvasHeight - canvasHeight/2 ;
      const r = 2 * Math.random();
      // const c = colors[Math.floor(Math.random()*colors.length)]
      const c = 'white';

    particles.push(new Particle(
        x,
        y,
        r,
        c
    ))
  }
//   console.log(particles)
}

let radians = 0;
let alpha = 1;
// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(22,22,22,${alpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height)

//   c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  
  c.save()
  c.translate(canvas.width/2, canvas.height/2)
  c.rotate(radians)
  particles.forEach(particle => {
    particle.update()
   })
  c.restore()
  radians += 0.001;

  if(mousedown && alpha >= 0.009){
      alpha -= 0.01;
  }else if(!mousedown && alpha < 1){
      alpha += 0.01;
  }
//   console.log(alpha)
}

init()
animate()