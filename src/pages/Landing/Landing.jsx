// NPM Modules
import { Link } from "react-router-dom";

// css
import styles from "./Landing.module.css";

const Landing = ({ user, profile, recipes }) => {
  // console.log("User", user)
  // console.log("Profile", profile)

console.log(recipes)

  return (
    <>
      <main className={styles.landingContainer}>
        {user && profile ? (
          <></>
        ) : (
          <>
            <section className={styles.noUserLandingContainer}>
              <p>
                We invite you to preserve and share your family recipes and
                their significance. Keep them for yourself or share to the world
                for others to learn and enjoy.
              </p>
              <div>
                <Link to="/auth/login">Sign In</Link>
                <Link>Sign Up</Link>
              </div>
            </section>
          </>
        )}
      </main>

      <section className={styles.featuredRecipes}>
        <h1>Today's Featured Recipes</h1>
        <div>

        </div>
      </section>
    </>
  );
};

export default Landing;
