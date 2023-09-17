// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './ProfileCard.module.css'

// component


export default function ProfileCard({ profile }) {
  return (
    <div className={styles.container}>
      <Link to={`/family/${profile._id}`} state={profile}>
        <h3>{profile.name}</h3>
      </Link>
      <Link to={`/family/${profile._id}`} state={profile}>
        <img src={profile.photo} alt={profile.name}/>
      </Link>
      <button type='button'>
        Add Family Member
      </button>
    </div>
  )
}
