import React, { useState, useEffect } from "react";
import ListingContainer from "./ListingContainer";

function SearchUI() {
    const [searchObj, setSearchObj] = useState({identity: 0, service: 0, location: 0});
    const [searchText, setSearchText] = useState(['', '', '']);
    const [listings, setListings] = useState([]);

    function getListings() {
        // the variable for identity_id is static because all entries in db have an identity_id of 3
        fetch(`http://localhost:3000/listings?identity_id=3&service_id=${searchObj.service}&location_id=${searchObj.location}`)
        .then((r) => r.json())
        .then((listingsArray) => {
            setListings(listingsArray);
        })
    }

    function getText() {
        const idsel = document.getElementById('identity');
        const sersel = document.getElementById('service');
        const locsel = document.getElementById('location');

        setSearchText([
            idsel.options[idsel.selectedIndex].text,
            sersel.options[sersel.selectedIndex].text,
            locsel.options[locsel.selectedIndex].text
        ])
    }

    useEffect(() => {
        if (Object.values(searchObj).every(p => p)) {
            getListings();
            // getText(); could go here?
            scrollToResults();
        } else {
            console.log('listings', listings)
            console.log('invalid', searchObj);
        }
    }, [searchObj])

    function correctSelectStyle(e) {
        e.target.className = 'selected';
    }

    function scrollToResults() {
        const results = document.getElementById('listingcontainer');
        results.style.display = 'block';
        results.scrollIntoView({ behavior: 'smooth', alignToTop: true }); // this doesnt scroll correctly on first go, maybe has to do with display:none?
        
        // const spc = document.getElementById('spc');
        // spc.scrollIntoView({ behavior: 'smooth', alignToTop: true });
    }

    function handleSelection(e) {
        getText();

        let query = {...searchObj};
        query[e.target.id] = parseInt(e.currentTarget.value);
        setSearchObj(query);
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

                {/* <p id='spc'>...</p> */}

                <ListingContainer searchText={searchText} listings={listings} />
        </div>
    )
}

export default SearchUI;