import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three'

class Service {
  constructor(canvas) {
    this.init.bind(this)
    this.update = this.update.bind(this)
    this.updateRotate = this.updateRotate.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    this.init(canvas)
  }

  init(canvas) {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
    this.addBoxes(5)
    this.renderer = new WebGLRenderer({ canvas })

    this.renderer.setSize(this.width, this.height)
    this.camera.position.set(0, 0, +1000)
    this.boxes.forEach(b => this.scene.add(b))
  }

  addBoxes(n) {
    this.boxes = [...Array(n)].map(
      _ => new Mesh(new BoxGeometry(100, 100, 100), new MeshNormalMaterial())
    )

    this.boxes.forEach(b => {
      b.position.set(
        parseInt(Math.random() * 500, 10) - 250,
        parseInt(Math.random() * 500, 10) - 250,
        parseInt(Math.random() * 500, 10) - 250
      )
    })
  }

  updateRotate() {
    this.boxes.forEach(b => {
      b.rotation.y += 0.01
      b.rotation.x += 0.01
      b.rotation.z += 0.01
    })
  }

  onWindowResize(width, height) {
    this.width = width
    this.height = height

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(width, height)
  }

  update() {
    this.renderer.render(this.scene, this.camera)
  }
}

export default Service
