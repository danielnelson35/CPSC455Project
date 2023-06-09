import './styles/App.css';
import Login from './components/Login.js'
import RecipeCard from './components/recipeCard.js';
import ProfilePreview from './components/ProfilePreview';
import GenerateButton from './components/GenerateButton';
import { connect } from 'react-redux'

function App({ dispatch, username }) {
  return (
    <div className='Frontpage'>
      <div className="App">
        <GenerateButton />
        <RecipeCard title="TestRecipe" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff926647f3c831a8bb7a3024468adfd8f%2F1683320006286CKN.jpg&q=60&c=sc&orient=true&poi=auto&h=512" description="Very yummy looking chicken" />
      </div>
      <Login />
      <ProfilePreview />
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