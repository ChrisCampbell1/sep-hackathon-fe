// npm modules
import { useState } from 'react'

// components
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm'
import EditIngredientsForm from '../../components/EditIngredientsForm/EditIngredientsForm'
import AddInstructionsForm from '../../components/AddInstructionsForm/AddInstructionsForm'
import MediaUploadForm from '../../components/MediaUploadForm/MediaUploadForm'

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
          <div className={styles.instructions}>
            <p>You're in Step 1 of 4</p>
            <p>In just four simple steps you will be able to preserve your cherished family recipe. Then, share it with those you chose, or let the world enjoy your dish! Get started with adding a few details about your dish!</p>
          </div>
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
          <h1>{recipe.title}</h1>
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
          <h1>{recipe.title}</h1>
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

      {formNumber === 3 &&
        <>
          <h1>{recipe.title}</h1>
          <MediaUploadForm
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
