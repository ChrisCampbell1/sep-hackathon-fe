// npm modules


// components
import RecipeContainer from '../../components/RecipeContainer/RecipeContainer';

// services


// styles
import styles from './Recipes.module.css'

// component

const Recipes = ({ user, profile, recipes }) => {
    return (
        <main className={styles.container}>
            <h1>All Recipes</h1>
            <RecipeContainer recipes={recipes}/>
        </main>
    );
};

export default Recipes;
