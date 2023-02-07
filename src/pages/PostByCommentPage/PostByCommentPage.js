import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {postRequest} from "../../api/request/postRequest";
import {RouterEndPoints} from "../../routes/routes";

export const PostByCommentPage = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
    const [post,setPost] = useState(null);
    useEffect(() =>{
        if (postId) {
            postRequest.getPostById(postId).then(({data}) => setPost({...data }));
        }
    } ,[postId]);
    if (!post) return null;
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <div>PostId: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
            <button onClick={() => navigate(`/${RouterEndPoints.comments}`)}>{'<'}Back</button>

        </div>
    );
};

