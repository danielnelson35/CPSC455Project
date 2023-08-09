import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/thunks/userThunks";
import { DISPLAY_RECIPE } from "redux/actions/actions";

const RecipeItem = (props) => {

    const user = useSelector(state => state.userStore.user);
    const dispatch = useDispatch();
    const recipe = props.recipe;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(userActions.deleteFavouriteRecipe([user.username, recipe.title]));
        e.stopPropagation();    
    }

    const handleDisplay = (e) => {
        e.preventDefault();
        dispatch(DISPLAY_RECIPE(recipe));
    }


    return (
        <div className="favouriteRecipeItem clickable" onClick={handleDisplay}>
            <div >
                <img src={recipe.image} className="rec" />
            </div>
            <div>
                <p className="link">{recipe.title}</p>
            </div>
            <button className="deletebutton" onClick={handleDelete}>X</button>
        </div>
    )
}

export default RecipeItem;