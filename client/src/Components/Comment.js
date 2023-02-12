import React from "react";

function Comment({ id, user_id, listing_id, commenttext, author, currentUser, delComment }) {

    function deleteComment() {
        delComment(id);
        fetch(`http://localhost:3000/comments/${id}`, {
            method: 'DELETE',
        })
        .then((r) => console.log(r))
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