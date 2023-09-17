// npm modules
import { useLocation, Link } from 'react-router-dom'

// components


// services


// styles
import styles from './ShowProfile.module.css'

// component


export default function ShowProfile({ user, profile }) {
  const location = useLocation()
  const profileDisplayed = location.state

  return (
    <main className={styles.container}>
      <h1>{profileDisplayed.name}</h1>
      <img src={profileDisplayed.photo} alt={profileDisplayed.name} />
      <p>{profileDisplayed.bio}</p>
      {profileDisplayed._id === profile._id ?
        <Link to={`/family/${profileDisplayed._id}/edit`}>Edit Profile</Link>
        :
        <button type='button'>
          Add Family Member
        </button>
      }
    </main>
  )
}
