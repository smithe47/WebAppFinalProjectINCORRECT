import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Post_Collection_Access } from '../imports/api/posts.js';
import { Comment_Collection_Access } from '../imports/api/comment.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  Tracker.autorun(() => { 

    let posts_in_db = Post_Collection_Access.find().fetch();
    let comments_in_db = Comment_Collection_Access.find().fetch();

    ReactDom.render(<App  main_post_obj_prop={posts_in_db}
                          main_comment_obj_prop={comments_in_db}
                          />, 
                        document.getElementById('content'));
  });

});


