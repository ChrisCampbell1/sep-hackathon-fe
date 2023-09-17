// npm modules
import { useState } from 'react'

// components
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm'

// services

// styles
import styles from './NewRecipe.module.css'

// component


export default function NewRecipe({ profile, recipes, setRecipes }) {
  const [formNumber, setFormNumber] = useState(0)
  const [recipe, setRecipe] = useState(null)

  const increaseFormNumber = () => {
    setFormNumber(formNumber + 1)
  }

  const decreaseFormNumber = () => {
    if (formNumber === 0) {
      return
    } else {
      setFormNumber(formNumber - 1)
    }
  }
  
  return (
    <main className={styles.container}>
      <h1>Add New Recipe</h1>
      {formNumber === 0 && 
        <NewRecipeForm
          increaseFormNumber={increaseFormNumber}
          decreaseFormNumber={decreaseFormNumber}
          profile={profile}
          recipes={recipes}
          setRecipes={setRecipes}
          setRecipe={setRecipe}
        />
      }
    </main>
  )
}
