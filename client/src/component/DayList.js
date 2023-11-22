import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DayList() {
  //API로 Days 데이터를 가져와서 빈 배열에 넣어 자동으로 랜더링 되게 구축
  const [days, setDays] = useState([])
  const [count, setCount] = useState(0)

  function onClick() {
    setCount(count + 1)
  }

  function onClick2() {
    setDays(prevDays => [
      ...prevDays,
      {
        id: Math.random(),
        day: count + 1,
      }
    ])
  }

  //랜더링이 되고 API 호출을 위한 목적
  useEffect(() => {
    console.log('Count Change')
  }, [count])


  return (
    <>
      <ul className='list_day'>
        {days.map(day => (
          <li key={day.id}> Day {day.day} 
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day Change</button>
    </>
  )
}