import React, { createContext, useState } from 'react'
import Child from './Child'

export const Context = createContext(null)

export default function Parent() {
    const [title, setTitle] = useState("rame")
  return (
    <Context.Provider value={{setTitle}}>
    <div>
      <h1>{title}</h1>
      <Child />
    </div>
    </Context.Provider>
  )
}
