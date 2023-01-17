import React, { useState, useEffect } from "react";
import ListingContainer from "./ListingContainer";

function SearchUI() {
    const [searchQuery, setSearchQuery] = useState({identity: 0, service: 0, location: 0});
    const [listings, setListings] = useState([]);

    function getListings() {
        // the variable for identity_id is static because all entries in db have an identity_id of 3
        fetch(`http://localhost:3000/listings?identity_id=3&service_id=${searchQuery.service}&location_id=${searchQuery.location}`)
        .then((r) => r.json())
        .then((listingsArray) => {
            console.log(listingsArray);
            setListings(listingsArray);
        })
    }

    useEffect(() => {
        if (Object.values(searchQuery).every(p => p)) {
            getListings();
        } else {
            console.log('invalid', searchQuery);
        }
    }, [searchQuery])

    function correctSelectStyle(e) {
        e.target.className = 'selected';
    }

    function handleSelection(e) {
        let query = {...searchQuery};
        query[e.target.id] = parseInt(e.currentTarget.value);
        setSearchQuery(query);
    }

    return (
        <div id='searchbox'>
            <form id='filterform'>
                    <label htmlFor='identityselect'>I am </label>
                    <select name='identityselect' className='filterdropdown' id='identity' onInput={correctSelectStyle} onChange={handleSelection}> 
                        <option value='' disabled selected>▼</option>
                        <option value='1'>transfeminine</option>
                        <option value='2'>transmasculine</option>
                    </select>

                    <br />

                    <label htmlFor='serviceselect'>seeking </label>
                    <select name='serviceselect' className='filterdropdown' id='service' onInput={correctSelectStyle} onChange={handleSelection}>
                        <option value='' disabled selected>▼</option>
                        <option value='1'>hormones</option>
                        <option value='2'>therapy</option>
                        <option value='3'>community</option>
                    </select>

                    <br />

                    <label htmlFor='locationselect'>near </label>
                    <select name='locationselect' className='filterdropdown' id='location' onInput={correctSelectStyle} onChange={handleSelection}>
                        <option value='' disabled selected>▼</option>
                        <option value='1'>traverse city</option>
                        <option value='2'>lansing</option>
                        <option value='3'>kalamazoo</option>
                        <option value='4'>flint</option>
                        <option value='5'>detroit</option>
                        <option value='6'>grand rapids</option>
                    </select>
                </form>

                {/* eventually this'll be something like {listings ? <ListingContainer /> : null} */}
                {/* <ListingContainer /> */}
        </div>
    )
}

export default SearchUI;