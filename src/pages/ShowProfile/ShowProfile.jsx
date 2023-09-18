// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'

// components
import RequestCard from '../../components/RequestCard/RequestCard'

// services
import * as profileService from '../../services/profileService'

// styles
import styles from './ShowProfile.module.css'

// component


export default function ShowProfile({ profile, setProfile }) {
  const location = useLocation()
  const profileDisplayed = location.state


  return (
    <main className={styles.container}>

      {profileDisplayed ?
        <>
        <div className={styles.profileTop}>
          <img src={profileDisplayed.photo} alt={profileDisplayed.name} />

          <div className={styles.profileInfo}>
            <h2>{profileDisplayed.name}</h2>
            <p>{profileDisplayed.bio}</p>
          </div>
        </div>
          {profileDisplayed._id === profile._id ?
            <>
            <Link to={`/family/${profileDisplayed._id}/edit`}>Edit Profile</Link>
            <h2 className={styles.peach}>Pending Invitations</h2>
            {profile.pendingRelatives.map((pendingRelative) =>
              <RequestCard key={pendingRelative._id} pendingRelative={pendingRelative} setProfile={setProfile}/>
            )}
  
            <h2 className={styles.tab}>My Family</h2>
            {profile.relatives.map((relative) => 
                <h3 key={relative._id}>{relative.name}</h3>
            )}
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
