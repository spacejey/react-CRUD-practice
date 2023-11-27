import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { IDay } from './DayList'

export default function CreateWord() {
  const days : IDay[] = useFetch('http://localhost:3000/days')

  //useRef는 DOM에 접근할 수 있게 해준다. 스크롤 위치 확인이나 포커스를 주거나.
  const engRef = useRef<HTMLInputElement>(null)
  const korRef = useRef<HTMLInputElement>(null)
  const dayRef = useRef<HTMLSelectElement>(null)
  const navigate = useNavigate()
  
  //통신 중일 때 버튼을 클릭 할 수 없도록 제어하는 장치
  const [ isLoading, setIsLoading ] = useState(false)
  
  function onSubmit(e: React.FormEvent){ 
    e.preventDefault()

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true)

      const day = dayRef.current.value
      const eng = engRef.current.value
      const kor = korRef.current.value

      fetch('http://localhost:3000/words/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert(`New Word Added in Day ${day}`)
          navigate(`/day/${day}`)
          setIsLoading(false)
        }
      })
    }
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      > {isLoading ? 'Saving...' : 'Save'} </button>
    </form>
  )
}