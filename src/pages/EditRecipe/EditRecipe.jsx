import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import UpdateRecipeForm from "../../components/UpdateRecipeForm/UpdateRecipeForm";
import EditIngredientsForm from "../../components/EditIngredientsForm/EditIngredientsForm";
import AddInstructionsForm from "../../components/AddInstructionsForm/AddInstructionsForm";
import MediaUploadForm from "../../components/MediaUploadForm/MediaUploadForm";

const EditRecipe = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [recipe, setRecipe] = useState(null);

  const location = useLocation();
//   console.log(location);

  const increaseFormNumber = () => {
    setFormNumber((preVal) => (preVal += 1));
  };

  const decreaseFormNumber = () => {
    setFormNumber((preVal) => (preVal -= 1));
  };

  return (
    <>
      <h1>Edit Recipe Page</h1>
      <button>
        <Link to=".." relative="path">
          Nvm
        </Link>
      </button>

      <br />
      <br />

      {formNumber === 0 && (
        <>
          <h1>{location.state.title}</h1>
          <UpdateRecipeForm
            increaseFormNumber={increaseFormNumber}
            // decreaseFormNumber={decreaseFormNumber}
            recipe={location.state}
            // profile={profile}
            // recipes={recipes}
            // setRecipes={setRecipes}
            setRecipe={setRecipe}
          />
        </>
      )}
      {formNumber === 1 && (
        <>
          <h1>{location.state.title}</h1>
          <EditIngredientsForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            // profile={profile}
            // recipes={recipes}
            // setRecipes={setRecipes}
            // setRecipe={setRecipe}
            // recipe={recipe}
          />
        </>
      )}
      {formNumber === 2 && (
        <>
          <h1>{location.state.title}</h1>
          <AddInstructionsForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            // profile={profile}
            // recipes={recipes}
            // setRecipes={setRecipes}
            // setRecipe={setRecipe}
            // recipe={recipe}
          />
        </>
      )}
      {formNumber === 3 && (
        <>
          <h1>{location.state.title}</h1>
          <MediaUploadForm
            increaseFormNumber={increaseFormNumber}
            decreaseFormNumber={decreaseFormNumber}
            // profile={profile}
            // recipes={recipes}
            // setRecipes={setRecipes}
            // setRecipe={setRecipe}
            // recipe={recipe}
          />
        </>
      )}
    </>
  );
};

export default EditRecipe;
