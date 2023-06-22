import Login from 'components/Login.js'
import RecipeCard from 'components/recipeCard.js';
import ProfilePreview from 'components/ProfilePreview';
import GenerateButton from 'components/GenerateButton';
import LoggedInButtons from 'components/LoggedInButtons';
import { useSelector } from 'react-redux';

export default function Home() {
    let username = useSelector(state => state.userStore.user.username)
    return (
    <div className='Frontpage'>
      <div className="App">
        <GenerateButton />
        <RecipeCard title="TestRecipe" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff926647f3c831a8bb7a3024468adfd8f%2F1683320006286CKN.jpg&q=60&c=sc&orient=true&poi=auto&h=512" description="Very yummy looking chicken" />
      </div>
      {!username && <Login />}
      {username && <LoggedInButtons />}
      <ProfilePreview />
    </div>
  );
}