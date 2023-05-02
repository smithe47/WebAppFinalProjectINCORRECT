import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';
import Comments from './Comments';

export default CommentSingle = (props) =>{
        return(
            <div className='itemBlock itemBlock--comment' key={props.comment_prop._id}>
                <p>{props.comment_prop.comment}</p>
                <div className='reply_functions'>
                    <button className='button button--small' onClick={() => {
                        Comment_Collection_Access.remove({_id: props.comment_prop._id})}}>X</button>
                </div>
            </div>
        );
};