

// props can have: title, image, description
export default function RecipeCard(props) {
    return (
        <div className="RecipeCard"> 
            <h2> {props.title} </h2>
            <img src={props.image} alt="Image" />
            <div> {props.description} </div>
        </div>
    )
}