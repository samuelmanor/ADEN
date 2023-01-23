import React, { useState } from "react";

function Listing({ name, address, description, website, phone, comments }) {
    const [shown, toggleShown] = useState(false);

    const large = <div id='listinglarge' className='hiddenlisting'> 
        <h1 id='x' onClick={toggleExpandView}>x</h1>
        <h2>{name}</h2>
        <h3>{address}</h3>
        <div className='listinglargeinfo'>
            <p>{description}</p>
            <div id='listinginfo'>
                <h3><a href={'http://' + website}>website</a></h3>
                <h3>{phone}</h3>
            </div>
        </div>
        <div className='listinglargeinfo'>
            {/* comments go here */}
        </div>
    </div>

    function toggleExpandView() {
        toggleShown((shown) => (!shown));

        const box = document.getElementById('listinglarge');

        if (shown) {
            box.className = '';
            document.body.style.overflow = 'hidden';
        } else {
            box.className = 'hiddenlisting';
            document.body.style.overflow = '';
        }
    }

    return (
        <div id='listingsmall'>
            <h2 onClick={toggleExpandView}>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
            <p className='commentlabel'>{comments.length} comment{comments.length > 1 || comments.length === 0 ? 's' : null}</p>

            {large}
        </div>
    )
}

export default Listing;