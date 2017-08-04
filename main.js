import { Engine, Render, World, Bodies } from 'matter-js'

let engine = Engine.create()

let render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    background: 'transparent',
    width: 500,
    height: 500
  }
});

World.add(engine.world, [
    Bodies.rectangle(200, 200, 200, 200, {
        isStatic: true,
        fillStyle: '#EA1070'
    })
])

Engine.run(engine)
Render.run(render)

// console.log(engine)