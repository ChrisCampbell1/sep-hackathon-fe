// npm modules
import { useState } from 'react'

// components


// services
import * as recipeService from '../../services/recipeService'


// styles
import styles from './UpdateRecipeForm.module.css'

// component


// export default function UpdateRecipeForm({ increaseFormNumber, recipes, setRecipes, setRecipe }) {
export default function UpdateRecipeForm({ increaseFormNumber, recipe, setRecipe }) {
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    recipeCategory: '',
    recipeCuisine: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedRecipe = await recipeService.updateRecipe(formData)
    await setRecipe(updatedRecipe)
    // await setRecipes([...recipes, updatedRecipe])
    increaseFormNumber()
  }

  return (
    <form
      className={styles.container}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder={recipe.title}
          // value={recipe.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder={recipe.description}
          // value={recipe.description}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="recipeCategory">Category</label>
        <input
          type="text"
          name="recipeCategory"
          id="recipeCategory"
          placeholder={recipe.recipeCategory}
          // value={recipe.recipeCategory}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="recipeCuisine">Cuisine</label>
        <input
          type="text"
          name="recipeCuisine"
          id="recipeCuisine"
          placeholder={recipe.recipeCuisine}
          // value={recipe.recipeCuisine}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>
        Next
      </button>
    </form>
  )
}
