import React from "react";
import Listing from "./Listing";

function ListingContainer({ searchText, listings }) {
    let listingCards = listings.map((listing) => {
        return (
            <Listing 
                key={listing.id}
                id={listing.id}
                name={listing.name}
                address={listing.address}
                description={listing.description}
                website={listing.website}
                phone={listing.phone}
                comments={listing.comments}
            />
        )
    })

    return (
        <div id='listingcontainer'>
            <h1>results for</h1>
            <div id='searchtitle'>
                <h2>{searchText[0]} {searchText[1]}</h2><h2 className='searchnear'>near</h2><h2>{searchText[2]}</h2>
            </div>

            <div id='listingsmallcontainer'>
                {listingCards}
            </div>
        </div>
    )
}

export default ListingContainer;