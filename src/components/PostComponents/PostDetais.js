import React, {useEffect, useState} from 'react'
import {getPost} from "../../api/getPosts";

export const PostDetails = ({postId,removePost}) => {
    const [post,setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            getPost(postId).then(resp => setPost(resp))
        }

    },[postId])
if (!post) return  null
 return (
    <div>
        PostDetails
        <div>id:{post.id}</div>
        <div>title:{post.title}</div>
        <button onClick={()=> removePost(null)}>Delete post</button>
    </div>
);
};

