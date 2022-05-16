import React from 'react';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';
import commentIcon from '../../assets/commentIcon.png';
import sample from '../../assets/sample.png';

export const Post = () => {

    return (
        <div className='post'>
            <h1>Post title</h1>
            <div className='karma'>
                <input className='arrow' type='image' src={upArrow}/>
                <p className='karmaPoints'>100</p>
                <input className='arrow' type='image' src={downArrow}/>
            </div>

            <img src={sample}></img>
            <div className='postFooter'>
                <div className='author'>Timothy McMurray</div>
                <div className='timestamp'>10 days</div>
                <div className='comments'>
                    <img src={commentIcon}/>
                    <div className='commentCount'>120</div>
                </div>
            </div>
        </div>
    )
}