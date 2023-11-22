import dummy from '../db/data.json'
import Word from './Word'

export default function Day() {
  const day = 1
  const wordList = dummy.words.filter(word => (
    word.day === 1
  ))
  console.log(wordList)

  return (
    <table>
      <tbody>
        {wordList.map(word => (
          <Word word={word} key={word.id}/>
        ))}
      </tbody>
    </table>
  )
}