import {createSlice} from "@reduxjs/toolkit"


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
    reducers:{}
})
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer