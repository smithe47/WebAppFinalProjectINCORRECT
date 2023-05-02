import React from 'react';
import Posts from './Post';
import CommentSingle from './CommentSingle';

export default CommentList = (props) =>{

    const renderComments = () =>{

        if (props.comment_prop === 0){
            console.log('NO POST');
            return(
                <div className='itemBlock'>
                    <p>No Comments</p>
                </div>
            );
        } else {
            let commentInfo = props.comment_prop.map((comment) => {

                if (props.post_prop._id == comment.postID){
                    return(
                        <CommentSingle key={comment._id} comment_prop={comment}/>
                    );
                }
                
            });
            return commentInfo;
        }

    };

        return(
            <div className='commentList'>
                    {renderComments()}
            </div>
        )
};