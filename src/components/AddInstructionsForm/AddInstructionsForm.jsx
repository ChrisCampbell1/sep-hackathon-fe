import { useState } from "react";

import EditDelete from "../EditDeleteValue/EditDelete";

import * as recipeService from "../../services/recipeService";

// import styles from "./AddInstructionsForm.module.css";

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
      {formData.instructions.map((instruction, idx) => {
        <div key={idx}>
          <li>{instruction}</li>
          <EditDelete />
        </div>;
      })}

      <form autoComplete="off">
        <div>
          <label htmlFor="instructions">Instruction</label>
          <input
            type="text"
            name="instruction"
            id="instruction"
            value={currentInstruction}
            onChange={handleChangeCurrentInstruction}
          />
        </div>
        <button onClick={handleAddInstruction}>Add Instruction</button>
        <button type="submit" onClick={handleSubmit}>
          Save and Next
        </button>
        <button type="submit" onClick={handleBack}>
          Back
        </button>
      </form>
    </>
  );
};

export default AddInstructionsForm;
