import React from "react";

function ListingSmall({ key, id, name, address, description, website, phone, comments }) {
    return (
        <div id='listingsmall'>
            <h2>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
            <p className='commentlabel'>{comments.length} comment{comments.length > 1 ? 's' : null}</p>
        </div>
    )
}

export default ListingSmall;