import React from 'react';
import AddPosts from './AddPosts';
import PostList from './PostList';
import NavBar from './NavBar';
import { Logout } from './Logout';
import {Meteor} from 'meteor/meteor';

export default App = (props) => {

  function Posts(){
    if(!!Meteor.userId()){
      return(
        <div>
          <Logout/>
          <AddPosts/>
          <PostList post_obj_prop={props.main_post_obj_prop} comment_obj_prop={props.main_comment_obj_prop}/>
        </div>
      )
    }
    else{
      return(
        <div>
          <h1>You must Log In or Sign Up to create or view posts</h1>
        </div>
      )
    }
  }
   return (
     <>
        <div>
        <NavBar/>
        <Posts/>
        </div>
      </>

    );
};
