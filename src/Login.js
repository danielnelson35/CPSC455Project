import { useState } from 'react';

export function Login() {
    const [input, setInput] = useState({});

    const handleChange = (e) => {
        setInput({...input,[e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {

    }

    return (
        <div className="loginform">
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" name="username" value={input.username} onChange={handleChange} />
                </label>
                <label>Password:
                    <input type="text" name='password' value={input.password} onChange={handleChange} />
                </label>
                <input className='loginbutton' type='submit' value="Login"/>
            </form>
        </div>
    )
}