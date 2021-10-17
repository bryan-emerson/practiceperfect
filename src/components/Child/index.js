import './style.css'

export default function Child(props) {
  return (
    <div className='child'>
      <p>How many Scoops would you like brodie?</p>
      <button onClick={props.up}>Clicky Up</button>
      <button onClick={props.down}>Clicky Down</button>
    </div>
  )
}