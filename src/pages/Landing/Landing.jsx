// NPM Modules
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// services
import * as profileService from "../../services/profileService"
import * as recipeService from "../../services/recipeService"

// css
import styles from "./Landing.module.css";

// const Landing = ({ user, profile, recipes }) => {
const Landing = ({ user, recipes }) => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await profileService.getProfile(user.profile)
      setProfile(userProfile)
    }
    fetchProfile()
  }, [])

  const [featuredRecipes, setFeaturedRecipes] = useState(null)

  useEffect(() => {
    const fetchFeatured = async () =>{
      const filteredRecipes = await recipeService.getFeaturedRecipes()
      setFeaturedRecipes(filteredRecipes)
    }
    fetchFeatured()
  }, [])



  // console.log(filteredRecipes)
  // console.log("User", user)
  // console.log("Profile", profile)
  // console.log(recipes)

  // const featuredRecipes = recipes.filter((recipe) => recipe.share);

  // console.log(featuredRecipes);

  return (
      <main className={styles.landingContainer}>
        {user && profile ? (
          <>
          <section className={styles.landingContainer}>
              <h1>Welcome back, {user.name}</h1>
              <p className={styles.doToday}>What would you like to do today?</p>
              <div>
                <Link to="/recipes/new">Add Recipe</Link>
                <Link to="/recipes">Browse Recipes</Link>
                <Link to="/family/add">Add Family</Link>
              </div>
            </section></>
        ) : (
          <>
            <section className={styles.landingContainer}>
              <p className={styles.weInvite}>
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
        {featuredRecipes ? 
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
        </section>
        
          :
        <h1>loading recipes...</h1>
        
        }
      </main>


  );
};

export default Landing;
