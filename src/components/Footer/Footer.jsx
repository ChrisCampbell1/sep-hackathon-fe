import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <section>
        <Link to="/">
          <GoHome />
          <p>Home</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes">
          <FaRegListAlt />
          <p>My Recipes</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes/new">
          <AiOutlineFolderAdd />
          <p>Add Recipe</p>
        </Link>
      </section>
      <section>
        <HiOutlineUserGroup />
        <p>Sharing</p>
      </section>
      <section>
        <FiSettings />
        <p>Settings</p>
      </section>
    </footer>
  );
};

export default Footer;
