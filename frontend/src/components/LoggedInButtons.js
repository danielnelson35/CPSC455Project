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

    if (user.username) {
        return (
            <div>
                <button className="favouritebutton" onClick={handleClick}>Add to Favourites</button>
                <div className="favourites">{user.favouriteRecipes.length > 0 && user.favouriteRecipes.map((recipe) => (
                    <div>{recipe.title}</div>
                ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>
            <p class="single-line">Login to see favourites</p>
    </div>
        )

    

    }

    
}

export default LoggedInButtons;