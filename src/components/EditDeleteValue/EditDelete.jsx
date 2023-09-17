import { useState } from "react";

const EditDelete = ({ ingredientValue, objValue, formData, setFormData }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  // const [editedIngredient, setEditedIngredient] = useState("");
  const [editedItem, setEditedItem] = useState("");

  const handleEditIngredient = (e) => {
    // setEditedIngredient(e.target.value);
    setEditedItem(e.target.value);
  };

  const handleSaveEditIngredient = (e) => {
    e.preventDefault();

    const newIngredients = formData.ingredients.map((ing) => {
      if (ing == ingredientValue) {
        return editedIngredient;
      }
      return ing;
    });

    // const newIngredients = formData.ingredients.map((ing) => {
    //   if (ing == ingredientValue) {
    //     return editedIngredient;
    //   }
    //   return ing;
    // });


    setFormData({ ingredients: newIngredients });

    setEditedIngredient("");
    // setEditedItem("")

    setIsEditOpen(false);
  };

  const deleteClickHandler = () => {
    const updatedData = formData[objValue].filter(
      (ingredient) => ingredient !== ingredientValue
    );
    setFormData({ [objValue]: updatedData });
  };

  return (
    <>
      {isEditOpen && (
        <form>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder={ingredientValue}
            value={editedIngredient}
            onChange={handleEditIngredient}
          />
          <button type="submit" onClick={handleSaveEditIngredient}>
            Save Edit
          </button>
          <button onClick={() => setIsEditOpen(false)}>Cancel</button>
        </form>
      )}
      {!isEditOpen && (
        <>
          <button onClick={() => setIsEditOpen(true)}>Edit</button>
          <button onClick={deleteClickHandler}>Delete</button>
        </>
      )}
    </>
  );
};

export default EditDelete;
