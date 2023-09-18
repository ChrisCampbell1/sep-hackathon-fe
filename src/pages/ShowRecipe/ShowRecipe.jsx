import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import * as recipeService from "../../services/recipeService";

const ShowRecipe = ({ profile, user }) => {
  const [showRecipe, setShowRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    const retreiveSelectedRecipe = async () => {
      const selectedRecipe = await recipeService.showRecipe(params.id);
      console.log(selectedRecipe);
      setShowRecipe(selectedRecipe);
    };
    retreiveSelectedRecipe();
  }, [params.id]);

  const onDeleteHandler = () => {};

  return (
    <>
      <main>
        {showRecipe ? (
          <>
            {/* {if } */}
            <Link to={`/recipes/${showRecipe._id}/edit`} state={showRecipe}>
              <button>Edit Recipe</button>
            </Link>
            <button>Delete Recipe</button>
            <h1>{showRecipe.title}</h1>
            <img src={showRecipe.image} alt={showRecipe.title} />
            <p>{showRecipe.description}</p>

            <section>
              <h2>Recipe Yield</h2>
              <p>{showRecipe.recipeYield}</p>
            </section>

            <section>
              <h2>Ingredients</h2>
              <ul>
                {showRecipe.ingredients.map((ingredient, idx) => {
                  return <li key={idx}>{ingredient}</li>;
                })}
              </ul>
            </section>

            <section>
              <h2>Instructions</h2>
              <ol>
                {showRecipe.instructions.map((instruction, idx) => {
                  return <li key={idx}>{instruction}</li>;
                })}
              </ol>
            </section>
          </>
        ) : (
          <h1>Loading Recipe..</h1>
        )}

        <Link to=".." relative="path">
          <button>Back To All Recipes</button>
        </Link>
      </main>
    </>
  );
};

export default ShowRecipe;
