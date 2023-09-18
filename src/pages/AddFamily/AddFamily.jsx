// npm modules
import { useState, useEffect } from 'react'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './AddFamily.module.css'

const AddFamily = ({ user, profile }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profileDisplayed => (
        // <p key={profile._id}>{profile.name}</p>
        <ProfileCard key={profileDisplayed._id} profileDisplayed={profileDisplayed} profile={profile}/>
      ))}
    </main>
  )
}

export default AddFamily
