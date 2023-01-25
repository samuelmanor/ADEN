import React, { useState } from "react";

function LoginUI({ currentUser, setCurrentUser, loginState, setLoginState, displayLoginUI }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        setLoginState(true);

        // login endpoint fetch which ends w/ setCurrentUser

        setCurrentUser({
            username: username
        });

        displayLoginUI();
    }

    function handleLogout() {
        setLoginState(false);

        // logout endpoint fetch

        displayLoginUI();
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
            {loginState ? logoutForm : loginForm}
        </div>
    )
}

export default LoginUI;