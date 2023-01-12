import React from "react";

function SearchUI() {

    function correctSelectStyle(e) {
        e.target.className = 'selected';
    }

    function handleSelection(e) { // eventually 'type' goes in parenthesis
        correctSelectStyle(e);
    }

    return (
        <div id='searchbox'>
            <form id='filterform'>
                    <label htmlFor='identityselect'>I am </label>
                    <select name='identityselect' className='filterdropdown' id='identitydropdown' onChange={handleSelection}>
                        <option value='' disabled selected>▼</option>
                        <option value='1'>transfeminine</option>
                        <option value='2'>transmasculine</option>
                    </select>

                    <br />

                    <label htmlFor='serviceselect'>seeking </label>
                    <select name='serviceselect' className='filterdropdown' id='servicedropdown' onChange={handleSelection}>
                        <option value='' disabled selected>▼</option>
                        <option value='1'>hormones</option>
                        <option value='2'>therapy</option>
                        <option value='3'>community</option>
                    </select>

                    <br />

                    <label htmlFor='locationselect'>near </label>
                    <select name='locationselect' className='filterdropdown' id='locationdropdown' onChange={handleSelection}>
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