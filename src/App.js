import Counter from "./components/Counter";
import '../src/styles/App.scss';
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [ posts, setPosts ] = useState([
        { id: 101, title: 'JavaScript', body: 'Programming Language' },
        { id: 102, title: 'TypeScript', body: 'Programming Language' },
        { id: 103, title: 'ReactJs', body: 'Programming Language' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (removedPost) => {
        console.log('removePost')
        setPosts(posts.filter(post => post.id !== removedPost.id));
    }

  return (
    <div className="app">
        <Counter></Counter>

        <PostForm create={createPost} posts={posts}></PostForm>

        {posts.length !== 0
                ? <PostList remove={removePost} posts={posts}></PostList>
                : <h2 className='empty-state'>Posts not found</h2>
        }

    </div>
  );
}

export default App;
