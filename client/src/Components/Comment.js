import React from "react";

function Comment({ id, user_id, listing_id, commenttext, author, currentUser, updateCommentArray }) {

    function deleteComment() {
        console.log('clicked del on', listing_id);
        updateCommentArray();
    }

    return (
        <div className='comment'>
            <h4>{author}</h4>
            <p>{commenttext}</p>

            {author == currentUser.username ? <button onClick={deleteComment}>x</button> : null}
        </div>
    )
}

export default Comment;