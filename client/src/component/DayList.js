import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function DayList() {
  const days = useFetch('http://localhost:3000/days')

  //Slow 3G를 위한 로딩 설정, day 배열이 0개일때에 설정한다.
  if (days.length === 0) {
    return <span>Loading...</span>
  }

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