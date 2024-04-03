import React, { useState } from 'react'

export default function Show() {
    const [show, setShow] = useState(true)
  return (
    <div>
        {show && <h1>text</h1>}
        <button onClick={() => setShow(!show)}>Show/Hide</button>
    </div>
  )
}
