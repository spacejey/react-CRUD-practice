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
      <form>
        <h1>Current Day:</h1>
        <br />
        <span className='current_day'>
          Day {days.length}
        </span>
        <button className='save_btn' onClick={addDay}>Add Day {days.length + 1} </button>
      </form>
    </>
  )
}