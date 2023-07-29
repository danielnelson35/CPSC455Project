import { useDispatch, useSelector } from "react-redux";
import { getSuggestionsAsync } from "redux/thunks/recipeThunks";

const Allergies = () => {
    const dispatch = useDispatch();
    dispatch(getSuggestionsAsync());
    
    const allergyList = useSelector(state => state.recipeStore.suggestions)
    return (
        <div className="allergiesdiv">
            <label for="allergies">Allergies:</label>
            <select name="allergies" id="allergies">
                {allergyList.length > 0 && allergyList.map((allergy) => (
                        <option value={allergy}>{allergy}</option>
                    ))}
            </select>
        </div>
    )
}

export default Allergies;