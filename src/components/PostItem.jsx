import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post-item'>
            <div className='post-item__content'>
                <h2 className='post-item__title'>
                    { props.post.id } - { props.post.title }
                </h2>
                <p className="post-item__description">
                    { props.post.body }
                </p>
            </div>
            <div className="post-item__buttons-container">
                <button className="post-item__button">Remove</button>
            </div>
        </div>
    );
};

export default PostItem;