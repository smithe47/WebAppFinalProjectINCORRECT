import React from 'react';
import Posts from './Post';
import CommentSingle from './CommentSingle';

export default class CommentList extends React.Component{

    renderComments(){

        if (this.props.comment_prop === 0){
            console.log('NO POST');
            return(
                <div className='itemBlock'>
                    <p>No Comments</p>
                </div>
            );
        } else {
            let commentInfo = this.props.comment_prop.map((comment) => {

                if (this.props.post_prop._id == comment.postID){
                    return(
                        <CommentSingle key={comment._id} comment_prop={comment}/>
                    );
                }
                
            });
            return commentInfo;
        }

    };


    render(){
        return(
            <div className='commentList'>
                    {this.renderComments()}
            </div>
        )
    }
};