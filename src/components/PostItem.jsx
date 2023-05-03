import React from 'react';
import RcButton from "./ui/rc-button/RcButton";

const PostItem = ({ post, remove }) => {
    return (
        <div className='post-item'>
            <div className='post-item__content'>
                <h2 className='post-item__title'>
                    { post.id } - { post.title }
                </h2>
                <p className="post-item__description">
                    { post.body }
                </p>
            </div>
            <div className="post-item__buttons-container">
                <RcButton onClick={() => remove(post)} className="post-item__button">Remove</RcButton>
            </div>
        </div>
    );
};

export default PostItem;