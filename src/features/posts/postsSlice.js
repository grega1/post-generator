import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = [
    {
        id:'1',title:"Exploring Redux", content:"Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        id:'2',title:"Redux Toolkits", content:"Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        id:'3',title:"Slices", content:"Lorem ipsum dolor sit amet, consectetur adip"
    }

]

const postsSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload)
        }, prepare(title,content, userId){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }}
    }
})
export const selectAllPosts = (state) => state.posts
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer