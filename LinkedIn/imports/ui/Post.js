import React from 'react';
import { Post_Collection_Access } from '../api/posts';
import { Reply_Collection_Access } from '../api/comment';
import Comments from './Comments';

export default class Posts extends React.Component{

    render(){
        return(
            <div className='itemBlock itemBlock--post' key={this.props.post_prop._id}>
                <div className='post_details'>
                    <h2>{this.props.post_prop.title}</h2>
                    <p>{this.props.post_prop.post}</p>
                    <p className='votes'>{this.props.post_prop.votes}</p>
                </div>


                <div className='post_functions'>
                    <button className='button button--delete' onClick={() => {
                        Post_Collection_Access.remove({_id: this.props.post_prop._id})}}>X</button>
                    <button className='button button--small' onClick={() => {
                        Post_Collection_Access.update({_id: this.props.post_prop._id}, {$inc: {votes: 1}})}}>+1</button>
                    <button className='button button--small' onClick={() => {
                        Post_Collection_Access.update({_id: this.props.post_prop._id}, {$inc: {votes: -1}})}}>-1</button>
                </div>

                <Comments post_prop={this.props.post_prop} comment_prop={this.props.comment_prop}/>
            </div>
        );
    }
};