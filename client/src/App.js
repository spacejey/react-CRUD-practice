import { useEffect } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

//Components
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <DayList />
        <Day />
      </div>
    </BrowserRouter>
  )
}

export default App
