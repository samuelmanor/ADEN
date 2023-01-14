import React, { useState, useEffect } from "react";

function SearchUI() {
    const [searchQuery, setSearchQuery] = useState({identity: 0, service: 0, location: 0});

    useEffect(() => {console.log('current query', searchQuery)}, [searchQuery]);

    function correctSelectStyle(e) {
        e.target.className = 'selected';
    }

    function handleSelection(e) {
        let query = searchQuery;
        query[e.target.id] = parseInt(e.currentTarget.value);
        console.log(query);
    }

    function handleSearch() {

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
        </div>
    )
}

export default SearchUI;

        // let newQuery = searchQuery;
        // switch (type) {
        //     case 'identity':
        //         // newQuery[1] = parseInt(e.currentTarget.value);
        //         // setSearchQuery(newQuery);
        //         break;
        //     case 'service':
        //         // console.log('service activated');
        //         break;
        //     case 'location':
        //         // console.log('location activated');
        //         break;
        // }