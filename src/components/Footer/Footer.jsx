import { Link } from "react-router-dom";

import homeIcon from "../../assets/home-icon.png";
import recipesIcon from "../../assets/recipes-icon.png";
import addRecipeIcon from "../../assets/add-recipe-icon.png";
import familyIcon from "../../assets/family-icon.png";
import profileIcon from "../../assets/profile-icon.png";

// import { GoHome } from "react-icons/go";
// import { FaRegListAlt } from "react-icons/fa";
// import { AiOutlineFolderAdd } from "react-icons/ai";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { FiSettings } from "react-icons/fi";

import styles from "./Footer.module.css";

const Footer = ({ user, profile }) => {

  console.log("user", user)
  console.log("profile", profile)
  return (
    <footer className={styles.footerContainer}>
      <section>
        <Link to="/">
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes">
          <img src={recipesIcon} alt="Recipes" />
          <p>My Recipes</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes/new">
          <img src={addRecipeIcon} alt="Add New Recipe" />
          <p>Add Recipe</p>
        </Link>
      </section>
      <section>
        <Link to="/family/add">
          <img src={familyIcon} alt="Family" />
          <p>Sharing</p>
        </Link>
      </section>
      <section>
        {user ? (
          <>
            <Link to={`/family/${user._id}`} state={profile}>
              <img
                src={profile.photo ? profile.photo : profileIcon}
                alt="My Profile"
                className={styles.profileImg}
              />
              <p>Profile</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth/login">
              <img src={profileIcon} alt="My Profile" />
              <p>Sign In</p>
            </Link>
          </>
        )}
      </section>
    </footer>
  );
};

export default Footer;
