import Login from 'components/Login.js'
import RecipeCard from 'components/recipeCard.js';
import ProfilePreview from 'components/ProfilePreview';
import GenerateButton from 'components/GenerateButton';
import LoggedInButtons from 'components/LoggedInButtons';
import { useSelector } from 'react-redux';

export default function Home() {
    let username = useSelector(state => state.userStore.user.username)
    return (
    <div className='container'>
      <div id="top">
        {<Login />}
        <ProfilePreview />
      </div>
      <div className='Frontpage'>
        <div className="App">
          <div className='left'>
          {<LoggedInButtons />}
          </div>
          <div className='right'>
            <GenerateButton />
            <RecipeCard />
          </div>
        </div>
      </div>
    </div>
  );
}