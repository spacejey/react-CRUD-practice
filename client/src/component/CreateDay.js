import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default function CreateDay() {
  const days = useFetch('http://localhost:3000/days')
  const navigate = useNavigate()

  function addDay(e){

    fetch('http://localhost:3000/days/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert(`Day ${days.length + 1} Added`)
        navigate('/')
      }
    })
  }

  return (
    <>
      <h1>Current Day: {days.length} Day</h1>
      <button onClick={addDay}>Add Day</button>
    </>
  )
}