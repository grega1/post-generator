import './Post.css'

export default function Post(title, content){

    return(
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}