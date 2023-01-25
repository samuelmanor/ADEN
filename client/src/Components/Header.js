import React, { useState } from "react";
import LoginUI from "./LoginUI";

function Header({ currentUser, setCurrentUser, loginState, setLoginState }) {
    const [showLoginUI, toggleShowLoginUI] = useState(false);

    function displayLoginUI() {
        toggleShowLoginUI((showLoginUI) => (!showLoginUI));
    }
    return (
        <div id='header'>
            <div className='headertab'>about</div>
            <div className='headertab' id='title'>ADEN</div>
            <div className='headertab' onClick={displayLoginUI}>log in</div>

            {showLoginUI ? <LoginUI currentUser={currentUser} setCurrentUser={setCurrentUser} loginState={loginState} setLoginState={setLoginState} /> : null}
        </div>
    )
}

export default Header;