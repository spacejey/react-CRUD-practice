import { useState } from 'react'

export default function Word({ word: w }) {
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone) 

  function togleShow(){
    setIsShow(!isShow)
  }

  function toggleDone() {
    fetch(`http://localhost:3000/words/${word.id}`, {
      //요청의 옵션들이 두번째 인자가 된다.
      method: 'PUT',
      //보내는 리소스의 타입
      headers: {
        'Content-Type': 'application/json',
      },
      //수정을 위한 정보들 입력
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    })
    //응답을 받는다: res
      .then(res => {
        if (res.ok) {
          setIsDone(!isDone)
        }
      })
  }

  function del() {
    if (window.confirm('Do you want to delete?')){
      fetch(`http://localhost:3000/words/${word.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setWord({ id: 0 })
        }
      })
    }
  }
  if (word.id === 0) {
    return null
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
        <button className='btn_del' onClick={del}>Delete</button>
      </td>
    </tr>
  )
}