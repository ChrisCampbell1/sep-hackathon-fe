// npm modules
import { Link } from "react-router-dom";

// components

// services

// styles
import styles from "./RecipeCard.module.css";

// component

export default function RecipeCard({ recipe }) {
  return (
    <div className={styles.container}>
      <Link to={`/recipes/${recipe._id}`} className={styles.link}>
        <div>
          <h2 className={styles.tab}>{recipe.title}</h2>
        </div>

        <div className={styles.card}>
          <img src={recipe.image} alt={recipe.title} />

          <div>
            <p className={styles.recipeDescription}>{recipe.description}</p>
            <p className={styles.recipeCategory}>#{recipe.recipeCategory}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
