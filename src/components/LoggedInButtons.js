import { useDispatch, useSelector } from "react-redux";
import { ADD_RECIPE } from "redux/actions/actions";

const LoggedInButtons = () => {
    const user = useSelector(state => state.userStore.user);
    const recipe = useSelector(state => state.recipeStore.recipe);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(ADD_RECIPE(recipe));
    }

    return (
        <div>
            <button className="homepageButton" onClick={handleClick}>Add to Favourites</button>
            <div>{user.username}</div>
            {user.favouriteRecipes.length > 0 && user.favouriteRecipes.map((recipe) => (
                <div>{recipe.title}</div>
            ))}
        </div>
    )
}

export default LoggedInButtons;