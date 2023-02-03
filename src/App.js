import './App.css';

import React, {useEffect, useState} from 'react';
import {UsersForm} from "./components/users_form/UsersForm";
import {Users} from "./components/users/Users";
import {usersRequests} from "./api/requests/requestUsers";
import {Comments} from "./components/comments/comments";
import {CommentsForm} from "./components/comments_form/CommentsForm";
import {commentRequest} from "./api/requests/commentRequest";

const App = () => {
    // const [users,setUsers] = useState([]);
    // useEffect(() =>{
    //     usersRequests.getAll().then(({data}) => setUsers([...data]))
    // },[]);
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        commentRequest.getAll().then(({data}) => setComments([...data]));
    },[]);
  return (
      <div style={{ textAlign: 'center' }}>
        {/*<UsersForm setUsers={setUsers()}/>*/}
        {/*  <hr/>*/}
        {/*  <Users users={users}/>*/}

          <Comments comments={comments}/>
          <hr/>
          <CommentsForm setcomments={setComments}/>
      </div>

  );
};

export default App;


