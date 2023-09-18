// NPM Modules
import { Link } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user, profile }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      {user && profile ?
        <>
          <h1>Welcome {user.name}!</h1>
          <img src={profile.photo} alt={user.name} />
          <Link to='/recipes/new'>Add Recipe</Link>
          <Link to='/recipes'>Browse Recipes</Link>
          <Link to='/family/add'>Add Family</Link>
        </>
        :
        <>
        <h1>hey you should log in</h1>
        </>
      }
    </main>
  )
}

export default Landing
