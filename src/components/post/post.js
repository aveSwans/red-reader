import React from 'react';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';
import commentIcon from '../../assets/commentIcon.png';

export const Post = () => {

    return (
        <div className='post'>
            <h1>Post title</h1>
            <img></img>
            <input className='upArrow' type='image' src={upArrow}/>
            <p className='karma'></p>
            <input className='downArrow' type='image' src={downArrow}/>
            <div className='author'>Iwrote Thispost</div>
            <div className='timestamp'>10 days</div>
            <div className='comments'><img src={commentIcon}/>1200</div>
        </div>
    )
}