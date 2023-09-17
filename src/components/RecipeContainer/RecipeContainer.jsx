// npm modules


// components
import RecipeCard from '../RecipeCard/RecipeCard'

// services


// styles
import styles from './RecipeContainer.module.css'

// component


export default function RecipeContainer({ recipes }) {
  return (
    <div className={styles.container}>
      {recipes ?
        recipes.map((recipe) =>
          <RecipeCard key={recipe._id} recipe={recipe}/>
        )
        :
        <h3>Loading Recipes...</h3>
      }
    </div>
  )
}
