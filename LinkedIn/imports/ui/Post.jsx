import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Reply_Collection_Access } from '../api/comment';
import Comments from './Comments';

export default Posts = (props) =>{

        return(
            <div className='itemBlock itemBlock--post' key={props.post_prop._id}>
                <div className='post_details'>
                    <h2>{props.post_prop.title}</h2>
                    <p>{props.post_prop.post}</p>
                    <p className='votes'>{props.post_prop.votes}</p>
                </div>


                <div className='post_functions'>
                    <button className='button button--delete' onClick={() => {
                        Post_Collection_Access.remove({_id: props.post_prop._id})}}>X</button>
                    <button className='button button--small' onClick={() => {
                        Post_Collection_Access.update({_id: props.post_prop._id}, {$inc: {votes: 1}})}}>+1</button>
                    <button className='button button--small' onClick={() => {
                        Post_Collection_Access.update({_id: props.post_prop._id}, {$inc: {votes: -1}})}}>-1</button>
                </div>

                <Comments post_prop={props.post_prop} comment_prop={props.comment_prop}/>
            </div>
        );
};