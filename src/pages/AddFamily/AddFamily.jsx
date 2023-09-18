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

  console.log(profiles)

  // search form state
  const [formData, setFormData] = useState({
    search: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (formData.search !== '') {
      const nameFilter = profiles.filter((el) => el.name.toLowerCase().includes(formData.search.toLowerCase()))
      // const emailFilter = profiles.filter((el) => el.email.toLowerCase().includes(formData.search.toLowerCase()))
      // const filtered = [...nameFilter, ...emailFilter]
      // const uniqueFilter = [... new Set(filtered)]
      // console.log(filtered)
      setProfiles(nameFilter)
      setFormData({ search: '' })
    }

  }

  // console.log(profile)
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      // const updatedProfileData = profileData.filter((el) => el._id !== profile._id)
      // setProfiles(updatedProfileData)
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Send A Request to Add Family Members</h1>
      <form
      className={styles.container}
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <div className={styles.inputContainer}>
        {/* <label htmlFor="search">Name</label> */}
        <input
          type="text"
          name="search"
          placeholder='search by name'
          id="search"
          value={formData.search}
          onChange={handleChange}
        />
      </div>      
      <button
        // onClick={handleSubmit}
      >
        Search
      </button>

      </form>

      {profiles.map(profileDisplayed => (
        // <p key={profile._id}>{profile.name}</p>
        <ProfileCard key={profileDisplayed._id} profileDisplayed={profileDisplayed} profile={profile}/>
      ))}
    </main>
  )
}

export default AddFamily
