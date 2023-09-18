// npm modules
import { Link, useNavigate } from 'react-router-dom'

// components


// services
import * as profileService from '../../services/profileService'

// styles
import styles from './ProfileCard.module.css'

// component


export default function ProfileCard({ profileDisplayed, profile }) {
  const navigate = useNavigate()
  
  const handleAdd = async (e) => {
    e.preventDefault()
    await profileService.requestFamily(profileDisplayed._id)
    navigate(`/family/${profile._id}`, {state: profile})
  }
  
  return (
    <div className={styles.container}>
      <div>
        <Link to={`/family/${profileDisplayed._id}`} state={profileDisplayed}>
          <img src={profileDisplayed.photo} alt={profileDisplayed.name}/>
        </Link>
        <Link to={`/family/${profileDisplayed._id}`} state={profileDisplayed}>
          <h3>{profileDisplayed.name}</h3>
        </Link>
      </div>
      {profileDisplayed._id !== profile._id &&
        <button type='button' onClick={handleAdd}>
          +
        </button>
      }
      
    </div>
  )
}
