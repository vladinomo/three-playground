import Service from './service'

const canvas = document.getElementById('canvas')
const threeAnimationService = new Service(canvas)

const render = () => {
  threeAnimationService.updateRotate()
  threeAnimationService.update()
  requestAnimationFrame(render)
}

addEventListener('resize', () => {
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  const width = canvas.offsetWidth
  const height = canvas.offsetHeight

  threeAnimationService.onWindowResize(width, height)
})

render()
