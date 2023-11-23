import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DayList() {
  //API로 Days 데이터를 가져와서 빈 배열에 넣어 자동으로 랜더링 되게 구축
  const [days, setDays] = useState([])

  //랜더링이 되고 API 호출을 위한 목적
  useEffect(() => {
    fetch('http://localhost:3000/days')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDays(data)
      })
  }, [])


  return (
    <>
      <ul className='list_day'>
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}