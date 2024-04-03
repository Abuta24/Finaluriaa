import React, { useState } from 'react'
import MemoChild from './MemoChild'

export default function Memo() {
    const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <MemoChild />
    </div>
  )
}
