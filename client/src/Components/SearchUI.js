import React, { useState, useEffect } from "react";

function SearchUI() {
    const [searchQuery, setSearchQuery] = useState([0, 0, 0]); // identity | service | location

    useEffect(() => { console.log('current search query:', searchQuery)}, [searchQuery])

    function correctSelectStyle(e) {
        e.target.className = 'selected';
    }

    // each <select>'s onClick runs getValue(e) and getQuery('identity/service/location')

    function getValue(e) {
        return parseInt(e.currentTarget.value);
    }

    function getQuery() { 
        // switch statement to find which part of query is being changed
        // if all 3 vals in searchQuery != 0, run handleSelection via useEffect
    }

    function handleSelection() {

    }

    // onClick={() => {func1(); func2();}}

    return (
        <div id='searchbox'>
            <form id='filterform'>
                    <label htmlFor='identityselect'>I am </label>
                    <select name='identityselect' className='filterdropdown' id='identitydropdown' onInput={correctSelectStyle} onChange={handleSelection()}> 
                        <option value='' disabled selected>▼</option>
                        <option value='1'>transfeminine</option>
                        <option value='2'>transmasculine</option>
                    </select>

                    <br />

                    <label htmlFor='serviceselect'>seeking </label>
                    <select name='serviceselect' className='filterdropdown' id='servicedropdown' onInput={correctSelectStyle} onChange={handleSelection()}>
                        <option value='' disabled selected>▼</option>
                        <option value='1'>hormones</option>
                        <option value='2'>therapy</option>
                        <option value='3'>community</option>
                    </select>

                    <br />

                    <label htmlFor='locationselect'>near </label>
                    <select name='locationselect' className='filterdropdown' id='locationdropdown' onInput={correctSelectStyle} onChange={handleSelection()}>
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