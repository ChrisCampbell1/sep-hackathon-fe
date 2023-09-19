// npm modules
import { useState } from 'react'

// components


// services
import * as recipeService from '../../services/recipeService'


// styles
import styles from './NewRecipeForm.module.css'


export default function NewRecipeForm({ increaseFormNumber, recipes, setRecipes, setRecipe }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    recipeCategory: '',
    recipeCuisine: '',
    recipeYield: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    const newRecipe = await recipeService.createRecipe(formData)
    await setRecipe(newRecipe)
    await setRecipes([...recipes, newRecipe])
    increaseFormNumber()
  }

  return (
    <form
      className={styles.container}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2>Add a Name</h2>
      <label htmlFor="title">Name</label>
      <div className={styles.inputContainer}>
        <p>Let's give your dish a name!</p>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          placeholder='Name'
        />
        <p>Type or use the microphone to record it</p>
      </div>
      <h2>Add Information</h2>
      <label htmlFor="recipeCuisine">Cuisine</label>
      <div className={styles.inputContainer}>
        <p>Let's add cuisine information for your dish about where it originates from.</p>
        <input
          type="text"
          name="recipeCuisine"
          id="recipeCuisine"
          onChange={handleChange}
          placeholder='Cuisine'
        />
        <p>Type or use the microphone to record it</p>

      </div>
      <label htmlFor="recipeCategory">Category</label>
      <div className={styles.inputContainer}>
        <p>Let's add a category to your dish! This can be an ingredient or something to help identify the dish, like a holiday.</p>
        <input
          type="text"
          name="recipeCategory"
          id="recipeCategory"
          onChange={handleChange}
          placeholder='Category'
        />
        <p>Type or use the microphone to record it</p>

      </div>
      <label htmlFor="description">Description</label>
      <div className={styles.inputContainer}>
        <p>Now let's add a short description about your dish! This should help you and others identify what is special or tasty about it!</p>
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          placeholder='Description'
          rows='5'
          cols='50'

        />
        <p>Type or use the microphone to record it</p>

      </div>
      <label htmlFor="recipeYield">Recipe Yield</label>
      <div className={styles.inputContainer}>
        <p>How many items or portions will this recipe make?</p>
        <input
          type="text"
          name="recipeYield"
          id="recipeYield"
          onChange={handleChange}
          placeholder='Yield'
        />
        <p>Type or use the microphone to record it</p>

      </div>
      <div className={styles.bottom}>
        <p>When you're done adding the information for your dish use the continue button to begin adding ingredients!</p>
        <div className={styles.buttons}>
        <button type='submit'>
          Continue
        </button>
        </div>

      </div>
    </form>
  )
}
