/* eslint-disable react/prop-types */
import './Post.css'

export default function Post({props}){
    return(
        <article className='post'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </article>
    )
}