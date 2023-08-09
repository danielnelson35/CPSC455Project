import { useDispatch, useSelector } from "react-redux";
import { getRestrictionsAsync } from "redux/thunks/recipeThunks";
import { useEffect } from "react";

export default function Test() {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeStore);

    useEffect(() => dispatch(getRestrictionsAsync()), [])


    function handleClick() {
        dispatch(getRestrictionsAsync());
    }

    console.log(recipe.restrictions);

    return (
        <>
            <button onClick={handleClick}> Get Restrictions </button>
            <div> 
                {recipe.restrictions.map((restriction) => {
                    return (<div> {restriction} </div>);
                })}
            </div>
        </>
    )
}