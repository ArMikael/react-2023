import RcInput from "./ui/rc-input/RcInput";
import RcButton from "./ui/rc-button/RcButton";
import React, {useState} from "react";

const PostForm = () => {
    const [post, setPost] = useState({ title: '', description: '' });
    const [posts, setPosts] = useState([{ title: '', description: ''}]);

    const addPost = (event) => {
        event.preventDefault();
        const newPost = {
            id: Date.now(),
            title: post.title,
            description: post.description
        };

        setPosts([...posts, newPost]);
        setPost({ title: '', description: '' });
    }

    return (
        <form className='post-form'>
            <RcInput type='text' placeholder='Post title' value={ post.title }
                     onChange={event => setPost({ ...post, title: event.target.value })}>
            </RcInput>
            <RcInput type='text' placeholder='Post description' value={ post.description }
                onChange={event => setPost({ ...post, description: event.target.value })}
            ></RcInput>
            <RcButton onClick={addPost}>Add Post</RcButton>
        </form>
    )
};

export default PostForm;