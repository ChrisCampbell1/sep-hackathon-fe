// npm modules
import { useState } from 'react'

// components


// services
import * as recipeService from '../../services/recipeService'


// styles
import styles from './EditIngredientsForm.module.css'

// component


export default function EditIngredientsForm({ increaseFormNumber, decreaseFormNumber, profile, recipes,setRecipes, setRecipe, recipe }) {
  // holds the form data that will be sent via the recipe service to the back end when the user hits next or back
  const [formData, setFormData] = useState({
    ingredients: [],
  })

  // holds just the current content of the text input box
  const [currentIngredient, setCurrentIngredient] = useState('')

  //updates state of current ingredient as the user types
  const handleChangeCurrentIngredient = (e) => {
    setCurrentIngredient(e.target.value)
  }

  // takes the current ingredient and adds it to the array of ingredients in form data
  const handleAddIngredient = (e) => {
    e.preventDefault()
    setFormData({ingredients: [...formData.ingredients, currentIngredient]})
    setCurrentIngredient('')
  }

  // calls the service to update the recipe with ingredients stored in form data, increases the form state number
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedRecipe = await recipeService.updateRecipe(formData, recipe._id)
    await setRecipe(updatedRecipe)
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id)
    updatedRecipes = [...updatedRecipes, updatedRecipe]
    await setRecipes(updatedRecipes)
    increaseFormNumber()
  }

  // calls the service to update the recipe with ingredients stored in form data decreases the form state number
  const handleBack = async (e) => {
    e.preventDefault()
    const updatedRecipe = await recipeService.updateRecipe(formData, recipe._id)
    await setRecipe(updatedRecipe)
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id)
    updatedRecipes = [...updatedRecipes, updatedRecipe]
    await setRecipes(updatedRecipes)
    decreaseFormNumber()
  }

  return (
    <>
    {formData.ingredients.map((ingredient, idx) =>
      // I just used LIs here to make it easy to test but these probably need to be their own elements so you can edit and delete the ingredients as you're entering them.
      <li key={idx}>{ingredient}</li>  
      )}
    
    <form
      className={styles.container}
      autoComplete="off"
    >
      <div className={styles.inputContainer}>
        <label htmlFor="ingredients">Ingredient</label>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          value={currentIngredient}
          onChange={handleChangeCurrentIngredient}

        />
      </div>
      <button
        onClick={handleAddIngredient}
      >
        Add Ingredient
      </button>
      <button
        type='submit'
        onClick={handleSubmit}
      >
        Save and Next
      </button>
      <button
        type='submit'
        onClick={handleBack}
      >
        Back
      </button>
    </form>
      </>
  )
}
