import React, { useState } from "react";

function LoginUI({ currentUser, setCurrentUser, loginState, setLoginState }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log('clicked')
    }

    function handleLogout() {
        console.log('clicked')
    }

    const loginForm = (
        <form onSubmit={handleLogin}>
            <label htmlFor='username'>username:</label>
            <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor='password'>password:</label>
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>log in</button>
        </form>
    );

    const logoutForm = (
        <div id='logoutform'>
            <p>profile</p>
            <button onClick={handleLogout}>log out</button>
        </div>
    )

    return(
        <div id='loginui'>
            
        </div>
    )
}

export default LoginUI;