// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'

// components
import RequestCard from '../../components/RequestCard/RequestCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

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
          <Link to={`/family/${profileDisplayed._id}/edit`}>Edit Profile</Link>
          </div>
        </div>
          {profileDisplayed._id === profile._id ?
            <>
            <h2 className={styles.peach}>Pending Invitations</h2>

            <div className={styles.requests}>
              {profile.pendingRelatives.map((pendingRelative) =>
                <RequestCard key={pendingRelative._id} pendingRelative={pendingRelative} setProfile={setProfile}/>
              )}
            </div>

  
            <h2 className={styles.tab}>My Family</h2>
            <div className={styles.card}>
              <Link className={styles.add} to={`/family/add`}>Add More Family Members</Link>
              {profile.relatives.map((relative) => 
                  // <h3 key={relative._id}>{relative.name}</h3>
                  <ProfileCard key={relative._id} profile={profile} profileDisplayed={relative}/>
              )}

            </div>
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
