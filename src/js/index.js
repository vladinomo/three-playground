import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three'

const width = window.innerWidth
const height = window.innerHeight

const scene = new Scene()
const camera = new PerspectiveCamera(75, width / height, 0.1, 1000)
const geometry = new BoxGeometry(400, 400, 400)
const material = new MeshNormalMaterial()
const box = new Mesh(geometry, material)
const renderer = new WebGLRenderer()

renderer.setSize(width, height)
camera.position.set(0, 0, +1000)
scene.add(box)

document.getElementById('root').appendChild(renderer.domElement)

tick()

function tick() {
  box.rotation.y += 0.01
  box.rotation.x += 0.01
  box.rotation.z += 0.01
  renderer.render(scene, camera) // レンダリング

  requestAnimationFrame(tick)
}
