import Service from './service'

const canvas = document.getElementById('canvas')
const c = new Service(canvas)

c.tick()
