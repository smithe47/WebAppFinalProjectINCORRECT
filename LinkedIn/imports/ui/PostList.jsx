import React from 'react';
import Posts from './Post';

export default PostList = (props) =>{

    const renderPosts = () =>{
        console.log(props.post_obj_prop);
        if (props.post_obj_prop === 0){
            console.log('NO POST');
            return(
                <div className='itemBlock'>
                    <p>Create a new post!</p>
                </div>
            );
        } else {
            props.post_obj_prop.sort(function(a, b){return b.datetime - a.datetime});
            let postInfo = props.post_obj_prop.map((post) => {
                return(
                    <Posts key={post._id} post_prop={post} comment_prop={props.comment_obj_prop}/>
                );
            });
            return postInfo;
        }

    };
        return(
            <div className='itemBlock'>
                <h1>All Posts:</h1>
                <div className='postedBox'>
                    {renderPosts()}
                </div>
            </div>
        )
};