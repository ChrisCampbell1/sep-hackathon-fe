// npm modules
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

import styles from "./NavBar.module.css";

import cookloreLogo from "../../assets/cooklore-logo.png";

const NavBar = ({ user, profile }) => {
  console.log("user", user);
  console.log("profile", profile);
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
        <Link to="/auth/login" className={styles.loginContainer}>
          <div className={styles.signInContainer}>
            <p>
              <FaUser className={styles.icon} />
            </p>
            <p>Sign In</p>
          </div>
        </Link>
      )}

      {user && (
        <Link to={`/family/${user._id}`} className={styles.loginContainer}>
          <div className={styles.signInContainer}>
            <p>{profile.photo ? <img src={profile.photo} alt={profile.name} className={styles.userImg}/> : <FaUser className={styles.icon} />}</p>
            <p>{profile.name}</p>
          </div>
        </Link>
      )}

      {/* {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/recipes">Recipes</NavLink></li>
          <li><NavLink to="/recipes/new">Add Recipe</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      } */}
    </nav>
  );
};

export default NavBar;
