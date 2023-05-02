import React from 'react';
import AddPosts from './AddPosts';
import PostList from './PostList';

export default class App extends React.Component {
  render(){
   return (
     <>
        <div>
        <h1 className='siteTitle'>Linked Out</h1>
        <AddPosts/>
        <PostList post_obj_prop={this.props.main_post_obj_prop} comment_obj_prop={this.props.main_comment_obj_prop}/>
        </div>
      </>

    );
  }
};
