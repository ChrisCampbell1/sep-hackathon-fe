// npm modules
import { Link } from "react-router-dom";

import { GiExitDoor } from "react-icons/gi";

import styles from "./NavBar.module.css";

import cookloreLogo from "../../assets/cooklore-logo.png";
import profileIcon from "../../assets/profile-icon.png";
import logoutIcon from "../../assets/logout-icon.png";

const NavBar = ({ user, profile, handleLogout }) => {

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <img src={cookloreLogo} alt="Cooklore Logo" />
          <p>Cook Lore</p>
        </Link>
      </div>

      <div>
        <input type="text" placeholder="🔍 Search" />
      </div>

      {!user && (
        <>
          {profile && (
            <Link to="/auth/login" className={styles.loginContainer}>
              <div className={styles.signInContainer}>
                  <img src={profileIcon} alt="User" />
                <p>Sign In</p>
              </div>
            </Link>
          )}
        </>
      )}

      {/* {user && profile && (
        <Link
          to={`/family/${user._id}`}
          state={profile}
          className={styles.profileContainer}
        >
          <div className={styles.signInContainer}>
            <p>
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className={styles.userImg}
                />
              ) : (
                <img src={profileIcon} alt="No User" />
              )}
            </p>
            <p>{profile.name}</p>
          </div>
        </Link>
      )} */}

      {user && profile && (
        <div className={styles.logoutContainer} onClick={handleLogout}>
          <img src={logoutIcon} />
          <p>Logout</p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
