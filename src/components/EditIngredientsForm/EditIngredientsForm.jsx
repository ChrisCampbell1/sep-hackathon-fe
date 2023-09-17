// npm modules
import { useState } from 'react'

// components


// services
import * as recipeService from '../../services/recipeService'


// styles
import styles from './EditIngredientsForm.module.css'

// component


export default function EditIngredientsForm({ increaseFormNumber, decreaseFormNumber, profile, recipes,setRecipes, setRecipe, recipe }) {
  const [formData, setFormData] = useState({
    ingredients: [],
  })

  const [currentIngredient, setCurrentIngredient] = useState('')

  const handleChangeCurrentIngredient = (e) => {
    setCurrentIngredient(e.target.value)
  }

  const handleAddIngredient = (e) => {
    e.preventDefault()
    setFormData({ingredients: [...formData.ingredients, currentIngredient]})
    setCurrentIngredient('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedRecipe = await recipeService.updateRecipe(formData, recipe._id)
    await setRecipe(updatedRecipe)
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id)
    updatedRecipes = [...updatedRecipes, updatedRecipe]
    await setRecipes(updatedRecipes)
    increaseFormNumber()
  }

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
