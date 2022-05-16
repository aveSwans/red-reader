import { createSlice } from "@reduxjs/toolkit";
import sample from "../../assets/sample.png"

const initialState = {posts: {}};

const testInitialState = {posts: {
    1: {
        id: 1,
        karma: 23,
        title: 'Am I Here?',
        image: sample,
        author: 'Franken Stein',
        comments: 45
    }
}};

const posts = createSlice({
    name: 'posts',
    initialState: testInitialState,
    reducers: {
        addPost: (state, action) => {
            const {id, karma, title, image, author, date, comments} = action.payload;
            state.posts[id] = {
                id: id,
                karma: karma,
                title: title,
                image: image,
                author: author,
                date: date,
                comments: comments
            }
        },
        addKarma: (state, action) => {
            const { id } = action.payload;
            const oldKarma = state.posts[id].karma;
            state.posts[id].karma = oldKarma + 1;
        },
        removeKarma: (state, action) => {
            const { id } = action.payload;
            const oldKarma = state.posts[id].karma;
            state.posts[id].karma = oldKarma - 1;
        }
    }
});

export const postsSelector = state => state.posts;
export const { addPost, addKarma, removeKarma } = posts.actions;
export default posts.reducer;