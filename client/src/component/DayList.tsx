import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { IDay, IWord } from './types'
import Word from './Word'

export default function DayList() {
  const days : IDay[] = useFetch('http://localhost:3000/days')
  const [wordCounts, setWordCounts] = useState({})
  
  // Words Count
  useEffect(() => {
    const fetchWordCounts = async () => {
      const counts = {}
      // Fetch word counts for each day
      for (const day of days) {
        const response = await fetch(`http://localhost:3000/words?day=${day.day}`)
        const words = await response.json()
        counts[day.day] = words.length
      }
      setWordCounts(counts)
    }
    fetchWordCounts()
  }, [days])

  
  //Loading settings for Slow 3G, set when the day array is 0
  if (days.length === 0) {
    return <span>Loading...</span>
  }
  
  return (
    <>
      <ul className='list_day'>
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day} <br /> 
              {wordCounts[day.day] !== undefined
                ? ` Total ${wordCounts[day.day]} words` 
                : 'Loading...'}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}