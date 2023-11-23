import { Link } from 'react-router-dom'

export default function EmptyPage() {
  return (
    <>
      <h2>Wrong Page</h2>
      <Link to='/'>Undo</Link>
    </>
  )
}