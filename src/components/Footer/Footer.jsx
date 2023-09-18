import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "space-evenly", textAlign: 'center'}}>
      <section>
        <Link to="/">
          <GoHome style={{ width: "30px", height: "30px" }} />
          <p>Home</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes">
          <FaRegListAlt style={{ width: "30px", height: "30px" }} />
          <p>My Recipes</p>
        </Link>
      </section>
      <section>
        <Link to="/recipes/new">
          <AiOutlineFolderAdd style={{ width: "30px", height: "30px" }} />
          <p>Add Recipe</p>
        </Link>
      </section>
      <section>
        <HiOutlineUserGroup style={{ width: "30px", height: "30px" }} />
        <p>Sharing</p>
      </section>
      <section>
        <FiSettings style={{ width: "30px", height: "30px" }} />
        <p>Settings</p>
      </section>
    </footer>
  );
};

export default Footer;
