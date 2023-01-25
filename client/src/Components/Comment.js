import React from "react";

function Comment({id, user_id, listing_id, commenttext, author}) {
    return (
        <div className='comment'>
            <h4>{author}</h4>
            <p>{commenttext}</p>
        </div>
    )
}

export default Comment;