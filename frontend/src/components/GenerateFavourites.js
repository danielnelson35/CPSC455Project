import { useSelector, useDispatch } from "react-redux";
import { getRandomFavourite } from "redux/thunks/userThunks";

const GenerateFavourites = () => {

    const user = useSelector(state => state.userStore.user);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getRandomFavourite(user.username));
    }

    return (
        <button id="generatefavouritesbutton" className="favouritebutton" onClick={handleClick}>Random Favourite Recipe</button>
    )
}

export default GenerateFavourites;