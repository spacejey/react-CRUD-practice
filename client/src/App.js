import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

//Components
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import EmptyPage from './component/EmptyPage'

const App = () => {

  return (
    <>
      <BrowserRouter>

        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<DayList />} />
            <Route path='/day/:day' element={<Day />} />
            <Route path='' element={<EmptyPage />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
