import React from 'react'
import UseFetchName from './UseFetchName'

export default function Posts() {
    const {data} = UseFetchName("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
            {el.title}
        </div>
      ))}
    </div>
  )
}
