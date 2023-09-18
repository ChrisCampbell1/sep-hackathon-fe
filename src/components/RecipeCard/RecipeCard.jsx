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
      <Link to={`/recipes/${recipe._id}`}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.description}</p>
      </Link>
    </div>
  );
}
