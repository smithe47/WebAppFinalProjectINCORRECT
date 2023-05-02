import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';

export default  AddPosts = () => {

    const processPost = (event) =>{
        event.preventDefault();
        let post = event.target.postInput.value;
        let postTitle = event.target.postTitle.value;

        if(post){
            event.target.postTitle.value = '';
            event.target.postInput.value = '';
            Post_Collection_Access.insert({
                post: post,
                title: postTitle,
                datetime: Date.now(),
            });
            console.log(Post_Collection_Access)
        };

    };
        return(
            <div className='itemBlock'>
                <h1>Create Post:</h1>
                <form onSubmit={processPost.bind(this)}>
                    <label>Title: </label><input type='text' name='postTitle'/>
                    <br/>
                    <textarea name='postInput' placeholder='Write something...' rows='10' cols='50'/>
                    <br/>
                    <button className='button'>Post</button>
                </form>
            </div>
        )
};