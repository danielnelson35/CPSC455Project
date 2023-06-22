import { useState } from 'react';
import { connect } from 'react-redux'
import { SET_USERNAME } from 'redux/actions/actions';


function Login({ dispatch }) {
    const [input, setInput] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SET_USERNAME(input.username))
    }

    return (
        <div className="loginform">
            <form onSubmit={handleSubmit}>
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
}

export default connect()(Login);