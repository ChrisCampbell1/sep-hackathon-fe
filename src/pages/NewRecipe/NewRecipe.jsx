// npm modules
import { useState } from 'react'

// components
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm'
import EditIngredientsForm from '../../components/EditIngredientsForm/EditIngredientsForm'
import AddInstructionsForm from '../../components/AddInstructionsForm/AddInstructionsForm'

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
      {formNumber === 0 &&
        <>
          <h1>Add New Recipe</h1>
          <NewRecipeForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            profile={profile}
            recipes={recipes}
            setRecipes={setRecipes}
            setRecipe={setRecipe}
          />
        </>
      }
      {formNumber === 1 &&
        <>
          <h1>Add New Recipe</h1>
          <EditIngredientsForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            profile={profile}
            recipes={recipes}
            setRecipes={setRecipes}
            setRecipe={setRecipe}
            recipe={recipe}
          />
        </>
      }

      {formNumber === 2 &&
        <>
          <h1>Add New Recipe</h1>
          <AddInstructionsForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            profile={profile}
            recipes={recipes}
            setRecipes={setRecipes}
            setRecipe={setRecipe}
            recipe={recipe}
          />
        </>
      }
    </main>
  )
}
