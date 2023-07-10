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
        <RecipeCard />
      </div>
      {!username && <Login />}
      {username && <LoggedInButtons />}
      <ProfilePreview />
    </div>
  );
}