import {useState} from 'react'
import Child from '../Child/index.js'
import './style.css'

export default function Parent() {
let [count, setCount] = useState(10)

let decrement = ()=> {
  setCount(count - 1)
}

let increment = ()=> {
  setCount(count + 1)
}

  return (
    <div className='parent'>
      <h2>Ice Cream Scooper</h2>
      <p>Numby of Scoops: {count}</p>
      <Child down={decrement} up={increment}/>
    </div>
  )
}