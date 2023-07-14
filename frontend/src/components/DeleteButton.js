import { useDispatch, useSelector } from "react-redux";
import * as userActions from "redux/thunks/userThunks";

const DeleteButton = (props) => {

    const user = useSelector(state => state.userStore.user);
    const dispatch = useDispatch();
    const recipe = props.recipe;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(userActions.deleteFavouriteRecipe([user.username, recipe.title]));
    }
    
    return (
        <div>
            {recipe.title}
            <button className="deletebutton" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteButton;