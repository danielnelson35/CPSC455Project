import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as userActions from "redux/thunks/userThunks";
import RecipeItem from "./RecipeItem";
import AddRecipeForm from './AddRecipeForm';
import GenerateFavourites from './GenerateFavourites';

const LoggedInButtons = () => {
    const user = useSelector(state => state.userStore.user);
    const recipe = useSelector(state => state.recipeStore.recipe);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.username) {
            dispatch(userActions.getFavouriteRecipes(user.username));
        }
    }, [user.username])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(userActions.addFavouriteRecipe([user.username, recipe]));
    }

    if (user.username) {

        return (
            <div className="center">
                <div className="userButtons">
                    <button className="favouritebutton" onClick={handleClick}>Add to Favourites</button>
                    <GenerateFavourites />
                </div>
                
                <div className="favourites">{user.favouriteRecipes.length > 0 && user.favouriteRecipes.map((recipe) => (
                    recipe && <RecipeItem recipe={recipe} key={recipe.title} />
                ))}
                </div>
                <div className="favourites">
                    <AddRecipeForm />
                </div>
            </div>
        )
    } else {
        return (
            <div className="center">
                <p className="single-line">Login to see favourites</p>
            </div>
        )
    }


}

export default LoggedInButtons;