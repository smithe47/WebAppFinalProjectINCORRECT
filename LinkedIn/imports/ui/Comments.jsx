import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default Comments = (props) =>{

        return(
            <div className='comment_section'>

                <CommentList comment_prop={props.comment_prop} post_prop={props.post_prop}/>


                <AddComment post_prop={props.post_prop}/>
                
            </div>
        );
};