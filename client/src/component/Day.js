import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


//Components
import Word from './Word'

export default function Day() {
  //주소창에 있는 문자열을 가져온다. id를 가져오는 것.
  const { day } = useParams()
  const words = useFetch(`http://localhost:3000/words?day=${day}`)

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}