// npm modules
import { useState } from "react";

// components
import EditDelete from "../EditDeleteValue/EditDelete";

// services
import * as recipeService from "../../services/recipeService";

// styles
import styles from "./EditIngredientsForm.module.css";

// component

export default function EditIngredientsForm({
  increaseFormNumber,
  decreaseFormNumber,
  profile,
  recipes,
  setRecipes,
  setRecipe,
  recipe,
}) {
  // holds the form data that will be sent via the recipe service to the back end when the user hits next or back
  const [formData, setFormData] = useState({
    ingredients: [],
  });

  // const [isEditOpen, setIsEditOpen] = useState(false);

  // holds just the current content of the text input box
  const [currentIngredient, setCurrentIngredient] = useState("");

  //updates state of current ingredient as the user types
  const handleChangeCurrentIngredient = (e) => {
    setCurrentIngredient(e.target.value);
  };

  // takes the current ingredient and adds it to the array of ingredients in form data
  const handleAddIngredient = (e) => {
    e.preventDefault();
    setFormData({ ingredients: [...formData.ingredients, currentIngredient] });
    setCurrentIngredient("");
  };

  // calls the service to update the recipe with ingredients stored in form data, increases the form state number
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRecipe = await recipeService.updateRecipe(
      formData,
      recipe._id
    );
    await setRecipe(updatedRecipe);
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id);
    updatedRecipes = [...updatedRecipes, updatedRecipe];
    await setRecipes(updatedRecipes);
    increaseFormNumber();
  };

  // calls the service to update the recipe with ingredients stored in form data decreases the form state number
  const handleBack = async (e) => {
    e.preventDefault();
    const updatedRecipe = await recipeService.updateRecipe(
      formData,
      recipe._id
    );
    await setRecipe(updatedRecipe);
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id);
    updatedRecipes = [...updatedRecipes, updatedRecipe];
    await setRecipes(updatedRecipes);
    decreaseFormNumber();
  };

  return (
    <>
    <div className={styles.ingredients}>
      {formData.ingredients.map((item, idx) => (
        // I just used LIs here to make it easy to test but these probably need to be their own elements so you can edit and delete the ingredients as you're entering them.
        <div key={idx} className={styles.ingredient}>
          <li>{item}</li>
          <EditDelete
            objValue="ingredients"
            itemValue={item}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      ))}
    </div>

      <form className={styles.container} autoComplete="off">
        <label htmlFor="ingredients">Ingredient</label>
        <div className={styles.inputContainer}>
          <p>Tell us what goes into your special dish! Add one ingredient at a time with details you want</p>
          <div className={styles.sideBySide}>
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              placeholder="Ingredient"
              value={currentIngredient}
              onChange={handleChangeCurrentIngredient}
            />
            <button onClick={handleAddIngredient}>+ Add Ingredient</button>
          </div>
          <p>Type or use the microphone to record it</p>
          <p>Examples</p>
          <li>One stick of butter</li>
          <li>1/2 cup of butter</li>
          <li>8 Tablespoons of butter</li>
        </div>

        <div className={styles.bottom}>
          <p>When you're done adding the ingredients for your dish use the continue button to begin adding instructions!</p>
          <div className={styles.buttons}>
            <button type="submit" onClick={handleSubmit}>
              Save and Next
            </button>
            <button type="submit" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>

      </form>
    </>
  );
}
