import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
    if (!posts.length) {
        return (
            <h2 className='empty-state'>Posts not found</h2>
        )
    }

    return (
        <div className='post-list'>
            {posts?.map((post) =>
                <PostItem remove={remove} post={post} key={post.id}></PostItem>
            )}
        </div>
    )
};

export default PostList;