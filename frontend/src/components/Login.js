import { useState } from 'react';
import { connect } from 'react-redux'
import * as userThunks from 'redux/thunks/userThunks'
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
        dispatch(userThunks.login(input))
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
                        <input type="password" name='password' value={input.password} onChange={handleChange} />
                    </label>
                    <input className='homepageButton' type='submit' value="Login" />
                </form>
            </div>
        )
    } else {
        return (

            <div className="loginform">

                <p className="single-line">Hello, {user.username}</p>
            </div>
        )
    }
}

export default connect()(Login);