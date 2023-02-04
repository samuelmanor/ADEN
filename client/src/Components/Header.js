import React, { useState } from "react";
import LoginUI from "./LoginUI";

function Header({ setCurrentUser, loginState, setLoginState }) {
    const [showLoginUI, toggleShowLoginUI] = useState(false);

    function displayLoginUI() {
        toggleShowLoginUI((showLoginUI) => (!showLoginUI));
    }
    
    return (
        <div id='header'>
            <div className='headertab'>about</div>
            <div className='headertab' id='title'>ADEN</div>
            <div className='headertab' onClick={displayLoginUI}>{loginState ? 'profile' : 'log in'}</div>

            {showLoginUI ? <LoginUI setCurrentUser={setCurrentUser} loginState={loginState} setLoginState={setLoginState} displayLoginUI={displayLoginUI} /> : null}
        </div>
    )
}

export default Header;