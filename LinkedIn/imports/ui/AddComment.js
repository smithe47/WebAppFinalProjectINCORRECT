import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';

export default class AddComment extends React.Component{

    processComment(event){
        console.log(this.props.post_prop._id);
        event.preventDefault();
        let comment = event.target.commentInput.value;

        if(comment){
            event.target.commentInput.value = '';
            Comment_Collection_Access.insert({
                comment: comment,
                postID: this.props.post_prop._id,
            });
        };
    };


    render(){
        return(
            <div className='commentBox'>
                <h1>Write a comment:</h1>
                <form onSubmit={this.processComment.bind(this)}>
                    <textarea name='commentInput' placeholder='Write something...' rows='10' cols='50'/>
                    <br/>
                    <button className='button'>Post</button>
                </form>
            </div>
        )
    }
};