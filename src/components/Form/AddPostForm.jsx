import { useState } from "react"

export default function AddPostForm(){
    return(
        <section>
            <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" name="postTitle" id="postTitle" />
            <label htmlFor="postContent">Post Content:</label>
            <input type="text" name="postContent" id="postContent" />

        </form>
        </section>
    )
}