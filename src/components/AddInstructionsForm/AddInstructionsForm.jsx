import { useState } from "react";

import EditDelete from "../EditDeleteValue/EditDelete";

import * as recipeService from "../../services/recipeService";

import styles from "./AddInstructionsForm.module.css";

const AddInstructionsForm = ({
  increaseFormNumber,
  decreaseFormNumber,
  recipes,
  setRecipes,
  setRecipe,
  recipe,
}) => {
  const [formData, setFormData] = useState({
    instructions: [],
  });

  const [currentInstruction, setCurrentInstruction] = useState("");

  const handleChangeCurrentInstruction = (e) => {
    setCurrentInstruction(e.target.value);
  };

  const handleAddInstruction = (e) => {
    e.preventDefault();
    setFormData({
      instructions: [...formData.instructions, currentInstruction],
    });
    setCurrentInstruction("");
  };

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
        {formData.instructions.map((item, idx) => {
          return (
            <div key={idx} className={styles.ingredient}>
              <li>{item}</li>
              <EditDelete
                objValue="instructions"
                itemValue={item}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          )
        })}

      </div>

      <form autoComplete="off" className={styles.container}>
        <label htmlFor="instructions">Instruction</label>
        <div className={styles.inputContainer}>
          <p>Provide the step-by-step instructions for making your dish!
            Add one instruction at at time.</p>
          <div className={styles.sideBySide}>
            <input
              type="text"
              name="instruction"
              id="instruction"
              value={currentInstruction}
              onChange={handleChangeCurrentInstruction}
              placeholder='Input Instruction'
            />
            <button onClick={handleAddInstruction}>+ Add Instruction</button>
          </div>
          <p>Type or use the microphone to record it</p>
          <p>Examples</p>
          <li>Set oven temperature to 350 degrees</li>
          <li>Mix all dry ingredients</li>
          <li>Add 1 cup of flour</li>
        </div>

        <div className={styles.bottom}>
          <p>When you're done adding the instructions for your dish use the continue button to begin add some pictures, video, or audio!</p>
          <div className={styles.buttons}>
            <button type="submit" onClick={handleBack}>
              Back
            </button>
            <button type="submit" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>

      </form>
    </>
  );
};

export default AddInstructionsForm;
