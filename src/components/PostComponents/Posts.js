import React from 'react';

export const Posts = ({posts,onSelectPost}) => {
    return (
        <div>
            {posts.map((item) => {
                const {id:postId,title} = item;
               return (
                   <div
                       key={`${postId}-item`}>
                       {postId} -- {title}
                       <button onClick={() => onSelectPost(postId)}>Select post</button>

                   </div>
               )
            }
            )
            }
        </div>
    );
};
