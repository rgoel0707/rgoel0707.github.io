import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, commentsSelector, removeAllComments } from "../../Store/commentsSlice";

async function getComments(postId) {
  const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
  const data = response.json();
  return data;
}

export default function CommentSection({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const comments = useSelector(commentsSelector);

  const handleClick = () => {

    async function fetchComments() {
      setShowComments(true);
      setIsLoading(true);
      const comments = await getComments(post.id);
      setIsLoading(false);
      const commentData = comments[1].data.children; // this is an array of first level comments
      dispatch(removeAllComments());
      commentData.forEach(comment => {
        const { id, body, score, link_id } = comment.data;
        dispatch(addComment({
          id: id,
          text: body,
          votes: score,
          postId: link_id
        }));
      });
    }

    fetchComments();
  }

  return (
    <div className="comment-section">
      <div className="comment-button-div">
        <button className="comment-button" onClick={handleClick}><i className="fa-regular fa-comment"></i> ({post.num_comments})</button>
      </div>
      {isLoading ? <p className="loading-text">Loading...</p> : null}
      {(showComments) && (
        <div className="popup-overlay" onClick={(e) => { if (e.target.classList.contains('popup-overlay')) { setShowComments(false) } }}>
          <div className="comments-div">
            <p className="comments-header">Comments</p>
            {isLoading ? <p className="loading-text"><em>Loading...</em></p> : Object.values(comments).map(comment => <p className="comment-text">{comment.text}</p>)}
            <button class="close-btn" onClick={() => { setShowComments(false) }}>X</button>
          </div>
        </div>
      )
      }
    </div>
  )
}
