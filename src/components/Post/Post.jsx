/* eslint-disable react/prop-types */
import './Post.css'
import { useSelector } from 'react-redux'

import { selectAllUsers } from '../../features/users/usersSlice'

export default function Post({props}){
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === props.userId)
    return(
        <article className='post'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <span> by{author ? author.name : " Unknow author"}</span>
        </article>
    )
}