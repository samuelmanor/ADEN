import React, { useState } from "react";
import LoginUI from "./LoginUI";

function Header() {
    const [showLoginUI, toggleShowLoginUI] = useState(false);

    function displayLoginUI() {
        toggleShowLoginUI((showLoginUI) => (!showLoginUI));
    }
    return (
        <div id='header'>
            <div className='headtab'>about</div>
            <div className='headtab' id='title'>ADEN</div>
            <div className='headtab' onClick={displayLoginUI}>log in</div>

            {showLoginUI ? <LoginUI /> : null}
        </div>
    )
}

export default Header;