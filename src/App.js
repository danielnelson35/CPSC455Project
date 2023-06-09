import './App.css';
import Login from './Login';
import RecipeCard from './recipeCard';
import { connect } from 'react-redux'

function App({dispatch, username}) {
  return (
    <div className='Frontpage'>
      <div className="App">
        <button id="generatebutton">Generate Recipe</button>
        <RecipeCard title="TestRecipe" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff926647f3c831a8bb7a3024468adfd8f%2F1683320006286CKN.jpg&q=60&c=sc&orient=true&poi=auto&h=512" description="Very yummy looking chicken"/>
      </div>
      <Login />
      <div class="card">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile Picture" width="175" height="175"/>
        <h1>
          {username}</h1>
        </div>
    </div>
  );
}

// map the parts of the state that we want to the props 
// this refreshes everytime i change the state
const mapStateToProps = state => ({
  username: state.username
})

// use connect() for app to get access to store
export default connect(mapStateToProps)(App);