import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "../../types/typesForReducers";

const initialState: PostsState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        }
    }
})

export const { 
    setPosts 
} = postsSlice.actions;
export default postsSlice.reducer