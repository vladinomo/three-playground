import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three'

class Controller {
  constructor(canvas) {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
    this.box = new Mesh(
      new BoxGeometry(400, 400, 400),
      new MeshNormalMaterial()
    )
    this.renderer = new WebGLRenderer({ canvas })

    this.renderer.setSize(this.width, this.height)
    this.camera.position.set(0, 0, +1000)
    this.scene.add(this.box)

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.box.rotation.y += 0.01
    this.box.rotation.x += 0.01
    this.box.rotation.z += 0.01
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.tick)
  }
}

export default Controller
