// NPM Modules
import { Link } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user, profile, handleLogout }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      {user && profile ?
        <>
          <h1>Welcome {user.name}!</h1>
          <img src={profile.photo} alt={user.name} style={{width: "50px", height: "50px"}}/>
          <Link to='/recipes/new'>Add Recipe</Link>
          <Link to='/recipes'>Browse Recipes</Link>
          <Link to='/family/add'>Add Family</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
        :
        <>
        <h1>hey you should log in</h1>
        <button><Link to="/auth/login">Sign In</Link></button>
        <button><Link to="/auth/signup">Sign Up</Link></button>
        </>
      }
    </main>
  )
}

export default Landing
