import { useState } from 'react';
import { connect } from 'react-redux'
import { SET_USERNAME } from 'redux/actions/actions';
import { useSelector } from "react-redux";


function Login({ dispatch }) {
    const [input, setInput] = useState(
        {
            username: "",
            password: ""
        });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SET_USERNAME(input.username))
    }

    let user = useSelector(state => state.userStore.user);

    if (!user.username) {
        return (
    
            <div className="loginform">
                <form className="loginformForm" onSubmit={handleSubmit}>
                    <label>Username:
                        <input id="username" type="text" name="username" value={input.username} onChange={handleChange} />
                    </label>
                    <label>Password:
                        <input type="text" name='password' value={input.password} onChange={handleChange} />
                    </label>
                    <input className='homepageButton' type='submit' value="Login" />
                </form>
            </div>
        )
    } else {
        return (
            
            <div className="loginform">

                <p class="single-line">Hello, {user.username}</p>
        </div>
            )
    }
}

export default connect()(Login);