import React from "react";
import ListingSmall from "./ListingSmall";

function ListingContainer() {
    return (
        <div id='listingcontainer'>
            <h1>results for</h1>
            <div id='searchtitle'>
                <h2>transfeminine healthcare</h2><h2 className='searchnear'>near</h2><h2>lansing</h2>
            </div>

            <div id='listingsmallcontainer'>
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
            </div>
        </div>
    )
}

export default ListingContainer;