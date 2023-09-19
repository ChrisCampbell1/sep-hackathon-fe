import { useState } from "react";
import styles from './EditDelete.module.css'

const EditDelete = ({ itemValue, objValue, formData, setFormData }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedItem, setEditedItem] = useState("");

  const handleEditIngredient = (e) => {
    // setEditedIngredient(e.target.value);
    setEditedItem(e.target.value);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    const newItems = formData[objValue].map((item) => {
      if (item == itemValue) {
        return editedItem;
      }
      return item;
    });


    setFormData({ [objValue]: newItems });
    setEditedItem("")
    setIsEditOpen(false);
  };

  const deleteClickHandler = () => {
    const updatedData = formData[objValue].filter(
      (ingredient) => ingredient !== itemValue
    );
    setFormData({ [objValue]: updatedData });
  };

  return (
    <>
      {isEditOpen && (
        <form className={styles.container}>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder={itemValue}
            value={editedItem}
            onChange={handleEditIngredient}
          />
          <button type="submit" onClick={handleSaveEdit}>
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
