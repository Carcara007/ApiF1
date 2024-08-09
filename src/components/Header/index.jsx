import styles from "./Header.module.css"
import {Link} from 'react-router-dom'

function Header() {
  return (
      <header className={styles.header}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/canada">Canadá</Link>
            <Link to="/china">China</Link>
            <Link to="/miami">Miami</Link>
            <Link to="/monaco">Monaco</Link>
          </nav>
      </header>
  )    
}

export default Header