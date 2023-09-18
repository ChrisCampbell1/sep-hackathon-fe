// npm modules
import { Link, useNavigate } from 'react-router-dom'


// components


// services
import * as profileService from '../../services/profileService'

// styles
import styles from './RequestCard.module.css'

// component


export default function RequestCard({ pendingRelative, setProfile }) {
  
  const handleApprove = async(e) => {
    e.preventDefault()
    const updatedProfile = await profileService.approveFamily(pendingRelative._id)
    setProfile(updatedProfile)
  }
  
  console.log(pendingRelative)

  return (
    <div className={styles.container}>
      <div>
        <Link to={`/family/${pendingRelative._id}`} state={pendingRelative}>
          <img src={pendingRelative.photo} alt={pendingRelative.name} />
        </Link>
        <Link to={`/family/${pendingRelative._id}`} state={pendingRelative}>
          <h3>{pendingRelative.name}</h3>
        </Link>
      </div>
        <button type='button' onClick={handleApprove}>
        ✔
        </button>
    </div>
  )
}
