import { useState } from 'react'

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone) 

  function togleShow(){
    setIsShow(!isShow)
  }

  function toggleDone() {
    setIsDone(!isDone)
  }


  return (
    <tr className={isDone ? 'Off' : ''}>
      <td>
        <input type="checkbox" checked={isDone}
          onChange={toggleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={togleShow}>
          Meaning {isShow ? 'Hide' : 'Show'}
        </button>
        <button className='btn_del'>Delete</button>
      </td>
    </tr>
  )
}