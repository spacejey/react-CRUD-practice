import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { IDay } from './DayList'

export default function CreateWord() {
  const days : IDay[] = useFetch('http://localhost:3000/days')

  //useRef allows access to the DOM. Check scroll position or give focus
  const engRef = useRef<HTMLInputElement>(null)
  const korRef = useRef<HTMLInputElement>(null)
  const dayRef = useRef<HTMLSelectElement>(null)
  const navigate = useNavigate()
  
  //A device that controls buttons so they cannot be clicked when communicating
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