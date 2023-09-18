// npm modules


// components
import RecipeContainer from '../../components/RecipeContainer/RecipeContainer';

// services


// styles
import styles from './Recipes.module.css'

// component

const Recipes = ({ user, profile, recipes }) => {
    const publicRecipes = recipes.filter((el) => el.share === true)
    // console.log(publicRecipes, "public recipes")
    // console.log(profile._id)
    const myRecipes = recipes.filter((el) => el.author._id === profile._id)
    // console.log(myRecipes, "my recipes")
    // console.log(recipes)
    const familyRecipes = recipes.filter((el) => el.author.relatives.includes(user.profile))
    console.log(user.profile)
    console.log(familyRecipes, "family recipes")

    const filteredRecipes = [...myRecipes, ...familyRecipes, ...publicRecipes]

    const uniqueRecipes = [...new Set(filteredRecipes)]
    
    return (
        <main className={styles.container}>
            <h1>All Recipes</h1>
            {recipes ?
                <RecipeContainer recipes={uniqueRecipes}/>
                :
            <h3>Loading Recipes...</h3>
        }
        </main>
    );
};

export default Recipes;
