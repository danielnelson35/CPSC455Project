import './App.css';
import RecipeCard from './recipeCard';

function App() {
  return (
    <div className="App">
      <RecipeCard title="TestRecipe" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff926647f3c831a8bb7a3024468adfd8f%2F1683320006286CKN.jpg&q=60&c=sc&orient=true&poi=auto&h=512" description="Very yummy looking chicken"/>
      <button id="generatebutton">Generate Recipe</button>
    </div>
  );
}

export default App;
