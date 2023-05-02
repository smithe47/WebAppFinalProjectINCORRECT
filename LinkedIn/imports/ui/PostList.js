import React from 'react';
import Posts from './Post';

export default class PostList extends React.Component{

    renderPosts(){
        console.log(this.props.post_obj_prop);
        if (this.props.post_obj_prop === 0){
            console.log('NO POST');
            return(
                <div className='itemBlock'>
                    <p>Create a new post!</p>
                </div>
            );
        } else {
            this.props.post_obj_prop.sort(function(a, b){return b.datetime - a.datetime});
            let postInfo = this.props.post_obj_prop.map((post) => {
                return(
                    <Posts key={post._id} post_prop={post} comment_prop={this.props.comment_obj_prop}/>
                );
            });
            return postInfo;
        }

    };


    render(){
        return(
            <div className='itemBlock'>
                <h1>All Posts:</h1>
                <div className='postedBox'>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
};