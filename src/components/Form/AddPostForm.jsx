import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddPostForm.css'

import { postAdded } from "../../features/posts/postsSlice";
import {selectedAllUsers } from "../../features/user"

export default function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  
  const users = useSelector(selectedAllUsers)

  const handleTitleChanged = function (event) {
    setTitle(event.target.value);
  };
  const handleContentChanged = function (event) {
    setContent(event.target.value);
  };

  const handleSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setContent("");
      setTitle("");
    }
  };

  return (
    <section className="postFormWrapper">
      <h2>Add a New Post</h2>
      <form className="postForm"> 
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChanged}
          name="postTitle"
          id="postTitle"
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          type="text"
          name="postContent"
          value={content}
          onChange={handleContentChanged}
          id="postContent"
        />
        <button type="button" onClick={handleSavePost}>
          Save Post
        </button>
      </form>
    </section>
  );
}
