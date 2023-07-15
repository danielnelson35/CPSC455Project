import Login from 'components/Login.js'
import RecipeCard from 'components/RecipeCard.js';
import ProfilePreview from 'components/ProfilePreview';
import GenerateButton from 'components/GenerateButton';
import LoggedInButtons from 'components/LoggedInButtons';
import { useSelector } from 'react-redux';

export default function Home() {
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