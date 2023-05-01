import React from 'react';

const PostItem = ({ post }) => {
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
                <button className="post-item__button">Remove</button>
            </div>
        </div>
    );
};

export default PostItem;