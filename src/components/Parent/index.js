import {useState} from 'react'
import Child from '../Child/index.js'
import './style.css'

export default function Parent() {
let [count, setCount] = useState(10)

  return (
    <div className='parent'>
      <h2>Ice Cream Scooper</h2>
      <p>Num of Scoops: {count}</p>
      <Child />
    </div>
  )
}