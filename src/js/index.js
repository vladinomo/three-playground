import Service from './service'

const canvas = document.getElementById('canvas')
const threeAnimationService = new Service(canvas)

const render = () => {
  threeAnimationService.updateRotate()
  threeAnimationService.update()
  requestAnimationFrame(render)
}

render()
