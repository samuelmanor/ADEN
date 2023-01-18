import React from "react";
import ListingSmall from "./ListingSmall";

function ListingContainer({ searchText }) {
    return (
        <div id='listingcontainer'>
            <h1>results for</h1>
            <div id='searchtitle'>
                <h2>{searchText[0]} {searchText[1]}</h2><h2 className='searchnear'>near</h2><h2>{searchText[2]}</h2>
            </div>

            <div id='listingsmallcontainer'>
                {/* temp solution until props are handed down to here from searchui */}
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
                <ListingSmall />
            </div>
        </div>
    )
}

export default ListingContainer;