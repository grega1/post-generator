import { useState } from "react"

export default function AddPostForm(){4
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const handleTitleChanged = function(event){
        setTitle(event.target.value)
    }
    const handleContentChanged = function(event){
        setContent(event.target.value)
    }
    return(
        <section>
            <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" value={title} onChange={handleTitleChanged} name="postTitle" id="postTitle" />
            <label htmlFor="postContent">Post Content:</label>
            <input type="text" name="postContent" value={content} onChange={handleContentChanged}id="postContent" />

        </form>
        </section>
    )
}