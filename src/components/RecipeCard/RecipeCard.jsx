// npm modules


// components


// services


// styles
import styles from './RecipeCard.module.css'

// component


export default function RecipeCard({ recipe }) {
  return (
    <div className={styles.container}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {recipe.ingredients.map((ingredient, idx) =>
        <li key={idx}>{ingredient}</li>
      )}
    </div>
  )
}
