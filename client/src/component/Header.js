import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className="header">
      <h1>
        <Link to="/" className='header-title'>
          ✹Voca-Practice✹
        </Link>
      </h1>
      <div className='menu'>
        <Link to='/create_word' className="link">
          Add Voca</Link>
        <Link to='/create_day' className="link-date">
          Add Date</Link>
      </div>

    </div>
  )
}