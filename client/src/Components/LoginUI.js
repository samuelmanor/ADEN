import React, { useState } from "react";

function LoginUI({ setCurrentUser, loginState, setLoginState, displayLoginUI }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onWrongInfo() {
        const loginbtn = document.getElementById('loginbtn');

        loginbtn.innerText = 'Wrong user or pass!';
        setTimeout(function() {
            loginbtn.innerText = 'log in';
        }, 3000);
    }

    function handleLogin(e) {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };

        fetch('http://localhost:3000/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then((res) => {
            if (res.ok) {
                setCurrentUser(user);
                setLoginState(true);
                displayLoginUI();
            } else {
                onWrongInfo();
            }
        });
    }

    function handleLogout() {
        fetch('http://localhost:3000/logout/', {
            method: 'DELETE',
        }).then(() => {
            setCurrentUser({});
            setLoginState(false);
            displayLoginUI();
        });
    }

    const loginForm = (
        <form onSubmit={handleLogin}>
            <label htmlFor='username'>username:</label>
            <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor='password'>password:</label>
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit' id='loginbtn'>log in</button>
        </form>
    );

    const logoutForm = (
        <div id='logoutform'>
            <button onClick={handleLogout}>log out</button>
        </div>
    );

    return (
        <div id='loginui'>
            {loginState ? logoutForm : loginForm}
        </div>
    )
}

export default LoginUI;