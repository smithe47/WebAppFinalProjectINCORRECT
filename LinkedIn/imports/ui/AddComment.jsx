import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';

export default AddComment = (props) =>{

    const processComment = (event) =>{
        console.log(props.post_prop._id);
        event.preventDefault();
        let comment = event.target.commentInput.value;

        if(comment){
            event.target.commentInput.value = '';
            Comment_Collection_Access.insert({
                comment: comment,
                postID: props.post_prop._id,
            });
        };
    };
        return(
            <div className='commentBox'>
                <h1>Write a comment:</h1>
                <form onSubmit={processComment.bind(this)}>
                    <textarea name='commentInput' placeholder='Write something...' rows='10' cols='50'/>
                    <br/>
                    <button className='button'>Post</button>
                </form>
            </div>
        )
};