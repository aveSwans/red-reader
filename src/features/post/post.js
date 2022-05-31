import React from 'react';
import { useSelector } from 'react-redux';
import { postsSelector } from '../../components/posts/PostsSlice';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';
import commentIcon from '../../assets/commentIcon.png';
import { addKarma, removeKarma } from '../../components/posts/PostsSlice';
import { useDispatch } from 'react-redux';

export const Post = ({id}) => {
    const posts = useSelector(postsSelector);
    const post = posts.posts[id];
    const dispatch = useDispatch();
    const realDate = new Date(post.date * 1000);

    return (
        <div className='post'>
            <h1>{post.title}</h1>
            <div className='karma'>
                <input className='arrow' type='image' src={upArrow} alt='up arrow'/>
                <p className='karmaPoints'>{post.karma}</p>
                <input className='arrow' type='image' src={downArrow} alt='down arrow'/>
            </div>

            <img src={post.image} alt={post.title}></img>
            <div className='postFooter'>
                <div className='author'>{post.author}</div>
                <div className='timestamp'>{realDate.toLocaleString()}</div>
                <div className='comments'>
                    <img id='commentIcon' src={commentIcon} alt='comments'/>
                    <div className='commentCount'>{post.comments}</div>
                </div>
            </div>
        </div>
    )
}