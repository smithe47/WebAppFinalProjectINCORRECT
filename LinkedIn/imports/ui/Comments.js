import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Comment_Collection_Access } from '../api/comment';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default class Comments extends React.Component{

    render(){
        return(
            <div className='comment_section'>

                <CommentList comment_prop={this.props.comment_prop} post_prop={this.props.post_prop}/>


                <AddComment post_prop={this.props.post_prop}/>
                
            </div>
        );
    }
};