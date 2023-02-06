import React, { useState } from "react";
import Comment from "./Comment";

function Listing({ name, address, description, website, phone, comments, loginState, currentUser }) {
    const [shown, toggleShown] = useState(false);
    const [commentsArray, setCommentsArray] = useState(comments); // for adding/removing comments

    function addComment() {

    }

    function deleteComment() {

    }

    let commentCards = comments.map((comment) => {
        return (
            <Comment 
                key={comment.id}
                id={comment.id}
                user_id={comment.user_id}
                listing_id={comment.listing_id}
                commenttext={comment.commenttext}
                author={comment.author}

                currentUser={currentUser}

                addComment={addComment}
                deleteComment={deleteComment}
            />
        )
    })

    const large = <div id='listinglarge' className='hiddenlisting'> 
        <h1 id='x' onClick={toggleExpandView}>x</h1>
        <h2>{name}</h2>
        <h3>{address}</h3>

        <div id='listingdesc'>
            <p>{description}</p>

            <div>
                <h3><a href={'http://' + website}>website</a></h3>
                <h3>{phone}</h3>
            </div>
        </div>

        <h3>comments:</h3>
        <div id='listingcommentcontainer'>
            {commentCards}
        </div>

        {loginState ? 'Leave a comment' : 'You must be logged in to leave a comment.'}
    </div>

    function toggleExpandView() {
        toggleShown((shown) => (!shown));

        const box = document.getElementById('listinglarge');

        if (shown) {
            box.className = '';
            document.body.style.overflow = 'hidden';
        } else {
            box.className = 'hiddenlisting';
            document.body.style.overflow = '';
        }
    }

    return (
        <div id='listingsmall'>
            <h2 onClick={toggleExpandView}>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>

            <p className='commentlabel'>{comments.length} comment{comments.length > 1 || comments.length === 0 ? 's' : null}</p>

            {large}
        </div>
    )
}

export default Listing;