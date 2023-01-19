import React from "react";
import ListingLarge from "./ListingLarge";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // to open in new tab?

function ListingSmall({ id, name, address, description, website, phone, comments }) {
    return (
        <div id='listingsmall'>
            {/* <h2>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
            <p className='commentlabel'>{comments.length} comment{comments.length > 1 || comments.length === 0 ? 's' : null}</p> */}
        </div>
    )
}

export default ListingSmall;