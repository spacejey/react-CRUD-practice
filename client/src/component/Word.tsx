import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IProps, IDay } from './types'

export default function Word({ word: w }: IProps) {
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)
  const { day } = useParams<{ day: string }>()
  const [countChecked, setCountChecked] = useState(0)

  useEffect(() => {
    const fetchWords = async () => {
      const res = await fetch(`http://localhost:3000/words?day=${day}`)
      const data = await res.json()
      const checkedCount = data.filter((item: any) => item.isDone).length

      setCountChecked(checkedCount)
    }
    fetchWords()
  }, [day])

  function togleShow(){
    setIsShow(!isShow)
  }


  function toggleDone() {
    fetch(`http://localhost:3000/words/${word.id}`, {
      //The options of the request are the second arguments
      method: 'PUT',
      //Type of resource being sent 보내는 리소스의 타입 
      headers: {
        'Content-Type': 'application/json',
      },
      //Enter information for modification 수정을 위한 정보들 입력
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    })
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
          setWord({ 
            ...word,
            id: 0 })
        }
      })
    }
  }
  if (word.id === 0) {
    return null
  }


  return (
    <>
      <tr className={isDone ? 'Off' : ''} 
        style = 
          {{ fontFamily: 'font-family: "Poppins", sans-serif;' }}>
        <td>
          <input type="checkbox" checked={isDone}
            onChange={toggleDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td className='word_btns'>
          <button className='btn_show' onClick={togleShow}>
            {isShow ? 'Hide ✔︎' : 'Show 👀'}
          </button>
          <button className='btn_del_word' onClick={del}>Delete</button>
        </td>
      </tr>
    </>
  )
}