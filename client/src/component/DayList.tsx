import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export interface IDay {
  id: number,
  day: number
}

export default function DayList() {
  const days : IDay[] = useFetch('http://localhost:3000/days')

  //Loading settings for Slow 3G, set when the day array is 0
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