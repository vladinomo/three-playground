import Controller from './controller'

const canvas = document.getElementById('canvas')
const c = new Controller(canvas)

c.tick()
