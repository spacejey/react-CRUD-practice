import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className="header">
      <h1>
        <Link to='/'>voca</Link>
      </h1>
      <div>
        <a href="#x" className="link">
          Add Voca
        </a>
        <a href="#x" className="link">
          Add Date
        </a>
      </div>

    </div>
  )
}