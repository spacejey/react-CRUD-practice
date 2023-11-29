import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

// Components
import { IDay } from './types'
import Process from '../component/Process'
import CheerMessage from './CheerMessage'

export default function DayList() {
  const days: IDay[] = useFetch('http://localhost:3000/days')
  const [wordData, setWordData] = useState({})

  // Words Count
  useEffect(() => {
    const fetchWordCounts = async () => {
      const data = {}

      // Fetch word counts for each day
      for (const day of days) {
        const response = await fetch(`http://localhost:3000/words?day=${day.day}`)
        const words = await response.json()
        const doneWordsCount = words.filter((word) => word.isDone).length

        data[day.day] = {
          totalWords: words.length,
          doneWordsCount: doneWordsCount,
        }
      }
      setWordData(data)
    }
    fetchWordCounts()
  }, [days])

  // Loading settings for Slow 3G, set when the day array is 0
  if (days.length === 0) {
    return <span>Loading...</span>
  }

  return (
    <>
      <ul className='list_day'>
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>
              <div>
                <p className='day-title'>Day {day.day}</p> <br />
                {wordData[day.day] !== undefined ? (
                  <Process
                    totalWords={wordData[day.day].totalWords}
                    doneWordsCount={wordData[day.day].doneWordsCount}
                  />
                ) : (
                  'Loading...'
                )}
              </div>
            </Link>
            <div className='cheer-message'>
              {wordData[day.day] !== undefined && (
                <CheerMessage
                  progress={wordData[day.day].doneWordsCount / wordData[day.day].totalWords * 100}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
