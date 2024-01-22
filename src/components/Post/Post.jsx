/* eslint-disable react/prop-types */
import './Post.css'
import { useSelector } from 'react-redux'

import { selectAllUsers } from '../../features/users/usersSlice'
import { parseISO, formatDistanceToNow } from 'date-fns'

export default function Post({props}){
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === props.userId)

    let timeAgo = ''
    if(props.date){
        const date= parseISO(props.date)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago` 
    }
    return(
        <article className='post'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p><span> by{author ? author.name : " Unknow author"}</span><span title={props.date}>{timeAgo}</span> </p>
        </article>
    )
}