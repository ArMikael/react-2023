import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
    return (
        <div className='post-list'>
            {posts?.map((post) =>
                <PostItem post={post} key={post.id}></PostItem>
            )}
        </div>
    )
};

export default PostList;