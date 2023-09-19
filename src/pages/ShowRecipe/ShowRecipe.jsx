import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import recipesIcon from "../../assets/recipes-icon.png";

import styles from "./ShowRecipe.module.css";

import * as recipeService from "../../services/recipeService";

const ShowRecipe = ({ profile, user }) => {
  const [showRecipe, setShowRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    const retreiveSelectedRecipe = async () => {
      const selectedRecipe = await recipeService.showRecipe(params.id);
      console.log(selectedRecipe);
      setShowRecipe(selectedRecipe);
    };
    retreiveSelectedRecipe();
  }, [params.id]);

  console.log(showRecipe);

  return (
    <main className={styles.container}>
      {showRecipe ? (
        <>
          <h1 className={styles.tab}>{showRecipe.title}</h1>
          <div className={styles.card}>
            <p className={styles.recipeCategory}>
              #{showRecipe.recipeCategory}
            </p>
            <p className={styles.recipeYield}>
              Yield: {showRecipe.recipeYield}
            </p>
            <p className={styles.recipeDesc}>{showRecipe.description}</p>

            <h3>Sharing</h3>
            {showRecipe.share ? (
              <div className={styles.public}>
                <img src={recipesIcon} alt="Recipes Icon" className={styles.recipeIcon} />
                <p>Recipe is Public</p>
              </div>
            ) : (
              <div className={styles.private}>
                <img src={recipesIcon} alt="Recipes Icon" className={styles.recipeIcon} />
                <p>Recipe is Private</p>
              </div>
            )}

            <img src={showRecipe.image} alt={showRecipe.title} className={styles.recipeImg}/>

            <section className={styles.ingredientsContainer}>
              <h3>Ingredients</h3>
              <ul className={styles.ingredientsUL}>
                {showRecipe.ingredients.map((ingredient, idx) => {
                  return (
                    <li key={idx} className={styles.listItem}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className={styles.instructionsContainer}>
              <h3>Instructions</h3>
              <ul className={styles.instructionsUL}>
                {showRecipe.instructions.map((instruction, idx) => {
                  return (
                    <li key={idx} className={styles.listItem}>
                      {instruction}
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* <h3>Media</h3>
            <video width="320" height="240" controls>
              <source src="https://www.youtube.com/44fa4143-32cc-4824-830e-232e0cd565d7" />
              Your browser does not support the video element.
            </video>

            <h3>Media</h3>
            <audio controls>
              <source src={showRecipe.audio} />
              Your browser does not support the audio element.
            </audio> */}

            <h3>Media</h3>
            {showRecipe.video && (
                <video width="252" height="157" controls>
                  <source src={showRecipe.video} />
                  Your browser does not support the video element.
                </video>
            )}

            {showRecipe.audio && (
              <>
                <h3>Media</h3>
                <audio controls>
                  <source src={showRecipe.audio} />
                  Your browser does not support the audio element.
                </audio>
              </>
            )}

            {!showRecipe.video && !showRecipe.audio && (
              <p>No Video or Audio Upload Avaialble</p>
            )}
          </div>
        </>
      ) : (
        <h1>Loading Recipe..</h1>
      )}
      {/* <Link to=".." relative="path">
          <button>Back To All Recipes</button>
          </Link> */}
    </main>
  );
};

export default ShowRecipe;
