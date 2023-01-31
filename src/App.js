import './App.css';
import React, {useEffect, useState} from 'react';

import {Posts} from "./components/PostComponents/Posts";
import {PostDetails} from "./components/PostComponents/PostDetais";
import {getPosts} from "./api/getPosts";


const App = () => {
   const [posts,setPosts]= useState([]);
     const [postId,setPostId]= useState(null);
  //
    useEffect(() => {
        getPosts().then(resp => setPosts(resp));
    },[]);

    console.log(postId);

    return (
      <div>
         <div className={'App'}>
             <div className={'info-block'}>
                 {!!posts.length && < Posts posts={posts} onSelectPost ={id => setPostId(id)}/>}
             </div>
             <div className={'Pipe'}/>
            <div className={'info-block'}>
                {!!postId && <PostDetails removePost={setPostId} postId={postId}/>}
          </div>
          </div>

</div>
  );

};

export default App;


