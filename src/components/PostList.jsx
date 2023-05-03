import React from 'react';
import PostItem from "./PostItem";
import RcButton from "./ui/rc-button/RcButton";

const PostList = ({ posts }) => {
    return (
        <div className='post-list'>
            <RcButton>Add Post</RcButton>

            {posts?.map((post) =>
                <PostItem post={post} key={post.id}></PostItem>
            )}
        </div>
    )
};

export default PostList;