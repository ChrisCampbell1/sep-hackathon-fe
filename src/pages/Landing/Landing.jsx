// NPM Modules
import { Link } from "react-router-dom";

// css
import styles from "./Landing.module.css";

const Landing = ({ user, profile, recipes }) => {
  console.log("User", user)
  console.log("Profile", profile)
  // console.log(recipes)

  // const featuredRecipes = recipes.filter((recipe) => {
  //   if (recipe.share) {
  //     return recipe;
  //   }
  // });

  // console.log(featuredRecipes);

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
                <Link to="/auth/signup">Sign Up</Link>
              </div>
            </section>
          </>
        )}
      </main>
{/* 
      <section className={styles.featuredRecipes}>
        <h1>Today's Featured Recipes</h1>

        <div>
          {featuredRecipes.map((recipe, idx) => {
            return (
              <Link to={`/recipes/${recipe._id}`} key={idx}>
                <div className={styles.container}>
                  <h2 className={styles.tab}>{recipe.title}</h2>
                  <div className={styles.card}>
                    <img src={recipe.image} alt={recipe.title} />
                    <div>
                      <p className={styles.recipeDescription}>
                        {recipe.description}
                      </p>
                      <p className={styles.recipeCategory}>
                        #{recipe.recipeCategory}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

export default Landing;
