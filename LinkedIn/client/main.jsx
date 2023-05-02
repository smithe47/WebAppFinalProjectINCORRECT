import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Post_Collection_Access } from '../imports/api/posts.js';
import { Comment_Collection_Access } from '../imports/api/comment.js';
import App from '../imports/ui/App.jsx';
import { Login } from '../imports/ui/Login.jsx';
import { NotFound } from '../imports/ui/NotFound.jsx';
import { Signup } from '../imports/ui/Signup.jsx';

Meteor.startup(() => {
  Tracker.autorun(() => { 
    const isAuthenticated = !!Meteor.userId();
    console.log('Auth check: ' + isAuthenticated)
    let posts_in_db = Post_Collection_Access.find().fetch();
    let comments_in_db = Comment_Collection_Access.find().fetch();
    
    const routes = (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App main_post_obj_prop={posts_in_db}
                                        main_comment_obj_prop={comments_in_db}
                                      />}/>
          <Route path='/App' element={<App  main_post_obj_prop={posts_in_db}
                                            main_comment_obj_prop={comments_in_db}
                                          />}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )

    ReactDom.render(routes, document.getElementById('content'));
  });

});


