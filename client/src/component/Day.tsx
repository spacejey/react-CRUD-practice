import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Components
import Word from './Word'
import { IWord } from './types'

export default function Day() {
  const { day } = useParams<{ day: string }>()
  const [words, setWords] = useState<IWord[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchWords = async () => {
      const res = await fetch(`http://localhost:3000/words?day=${day}`)
      const data = await res.json()
      setWords(data)
    }
    fetchWords()
  }, [day])

  const handleDeleteDay = async () => {
    const resWords = await fetch(`http://localhost:3000/words?day=${day}`)
    const wordsData = await resWords.json()

    const delWordPromise = wordsData.map(async (word) => {
      await fetch(`http://localhost:3000/words/${word.id}`, {
        method: 'DELETE',
      })
    })

    await Promise.all(delWordPromise)

    const resDay = await fetch(`http://localhost:3000/days/${day}`, {
      method: 'DELETE',
    })

    if (resDay.ok) {
      navigate('/')
    } else {
      // Handle error
      alert(`Failed to delete Day ${day}`)
    }
  }

  return (
    <>
      <div className='day-header'>
        <h2>Day {day}</h2>
        <button className='btn_del' onClick={handleDeleteDay}>
          Delete Date
        </button>
      </div>

      {words.length === 0 && <span>Loading...</span>}

      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}
