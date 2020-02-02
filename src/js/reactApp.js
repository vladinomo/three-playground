import React, { useRef, useEffect } from 'react'
import { render } from 'react-dom'

const App = () => {
  const canvas = useRef(null)

  useEffect(() => {
    console.log(canvas)
  }, [])

  return <canvas id="canvas" ref={canvas} />
}

render(<App />, document.getElementById('root'))
