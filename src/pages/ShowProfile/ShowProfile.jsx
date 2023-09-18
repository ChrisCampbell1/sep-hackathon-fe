// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'

// components


// services
import * as profileService from '../../services/profileService'

// styles
import styles from './ShowProfile.module.css'

// component


export default function ShowProfile({ profile }) {
  const location = useLocation()
  const profileDisplayed = location.state


  return (
    <main className={styles.container}>

      {profileDisplayed ?
        <>
          <h1>{profileDisplayed.name}</h1>
          <img src={profileDisplayed.photo} alt={profileDisplayed.name} />
          <p>{profileDisplayed.bio}</p>
          {profileDisplayed._id === profile._id ?
            <>
            <Link to={`/family/${profileDisplayed._id}/edit`}>Edit Profile</Link>
            <h2>Pending Family Requests</h2>
            {profile.pendingRelatives.map((pendingRelative) =>
              <h4 key={pendingRelative._id}>Pending Invite</h4>
            )}
  
            <h2>My Family</h2>
  
            <Link to={`/family/add`}>Add More Family Members</Link>
            </>
            :
            <></>
          }
        </>
        :
        <h3>Loading Profile...</h3>
      }


    </main>
  )
}
