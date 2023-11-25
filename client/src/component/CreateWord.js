import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function CreateWord() {
  const days = useFetch('http://localhost:3000/days')
  //useRef는 DOM에 접근할 수 있게 해준다. 스크롤 위치 확인이나 포커스를 주거나.
  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)
  const navigate = useNavigate()
  
  function onSubmit(e){

    e.preventDefault()

    fetch('http://localhost:3000/words/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then(res => {
      if (res.ok) {
        alert('New Word Added')
        navigate(`/day/${dayRef.current.value}`)
      }
    })
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
      <button>Save</button>
    </form>
  )
}