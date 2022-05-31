import React from "react";
import { Post } from "../../features/post/post";
import { getInitialPosts } from "../../api/reddit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./PostsSlice";
import { postsSelector } from "./PostsSlice";

export const Posts = () => {
    const dispatch = useDispatch();
    const postsList = useSelector(postsSelector);

    useEffect(() => {
        const loadInitialPosts = async () => {
            try {
                const response = await getInitialPosts();
                const posts = response.data.children;
                const utcTimestamp = new Date().getTime();
                console.log(posts);
                posts.forEach(post => {
                    const karma = post.data.ups - post.data.downs;
                    const created = post.data.created_utc;
                    dispatch(addPost({
                        id: post.data.id,
                        karma: karma,
                        title: post.data.title,
                        image: post.data.thumbnail,
                        author: post.data.author,
                        date: created,
                        comments: ''
                    }))
                })
            } catch (e) {
                console.log('failed to load initial posts')
            }
        }
        loadInitialPosts();
    }, []);
    


    return (
        <div>
            {Object.values(postsList.posts).map((post) => (
                <Post id={post.id} key={post.id}/>
            ))}
        </div>
    )
}