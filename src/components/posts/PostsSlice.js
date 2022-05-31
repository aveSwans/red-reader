import { createSlice } from "@reduxjs/toolkit";
import sample from "../../assets/sample.png"

/*const testInitialState = {posts: {
    1: {
        id: 1,
        karma: 23,
        title: 'Am I Here?',
        image: sample,
        author: 'Franken Stein',
        comments: 45
    },
    2: {
        id: 2,
        karma: 44,
        title: 'Hello there',
        image: sample,
        author: 'Mykonos Miriam',
        comments: 65
    },
    3: {
        id: 3,
        karma: 68,
        title: 'nope nope nope',
        image: sample,
        author: 'Heidi Deidi',
        comments: 0
    }
}};*/
const initialState = {posts: {}};

const posts = createSlice({
    name: 'posts',
    initialState: initialState,
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