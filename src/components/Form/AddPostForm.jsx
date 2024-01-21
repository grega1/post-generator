import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddPostForm.css'

import { postAdded } from "../../features/posts/postsSlice";
import {selectAllUsers } from "../../features/users/usersSlice";

export default function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  
  const users = useSelector(selectAllUsers)
  console.log(users)

  const handleTitleChanged = function (event) {
    setTitle(event.target.value);
  };
  const handleContentChanged = function (event) {
    setContent(event.target.value);
  };
  const onAuthorChanged = function (event) {
    setUserId(event.target.value);
  };

  const handleSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setContent("");
      setTitle("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const usersOptions = users.map( user =>(
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

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
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" onChange={onAuthorChanged} value={userId}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          type="text"
          name="postContent"
          value={content}
          onChange={handleContentChanged}
          id="postContent"
        />
        <button type="button" onClick={handleSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}
