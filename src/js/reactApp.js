import React, { useRef, useEffect } from 'react'
import { render } from 'react-dom'

import ThreeService from './service'

const App = () => {
  const canvas = useRef(null)
  const threeService = useRef(null)

  useEffect(() => {
    threeService.current = new ThreeService(canvas.current)

    const renderThree = () => {
      threeService.current.updateRotate()
      threeService.current.update()
      requestAnimationFrame(renderThree)
    }

    const onResize = () => {
      canvas.current.style.width = '100%'
      canvas.current.style.height = '100%'
      const width = canvas.current.offsetWidth
      const height = canvas.current.offsetHeight

      threeService.current.onWindowResize(width, height)
    }

    addEventListener('resize', () => {
      onResize()
    })
    renderThree()
  }, [])

  return <canvas id="canvas" ref={canvas} />
}

render(<App />, document.getElementById('root'))
