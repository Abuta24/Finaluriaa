import React, { useContext } from 'react'
import { Context } from './Parent'
import GrandChild from './GrandChild'

export default function Child() {

    const rame = useContext(Context)
  return (
    <div style={{border: "2px solid black"}}>
      <h1>child</h1>
      <GrandChild />
    </div>
  )
}
