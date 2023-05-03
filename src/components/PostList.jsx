import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
    return (
        <div className='post-list'>
            {posts?.map((post) =>
                <PostItem remove={remove} post={post} key={post.id}></PostItem>
            )}
        </div>
    )
};

export default PostList;