import Counter from "./components/Counter";
import '../src/styles/App.scss';
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import RcSelect from "./components/ui/rc-select/RcSelect";

function App() {
    const [ posts, setPosts ] = useState([
        { id: 101, title: 'JavaScript', body: 'Programming Language' },
        { id: 102, title: 'TypeScript', body: 'Strongly typed programming language that builds on JavaScript' },
        { id: 103, title: 'ReactJs', body: 'Open-source front-end JavaScript library' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const sortListOptions = [
        {
            name: 'Title',
            value: 'title'
        },
        {
            name: 'Description',
            value: 'body'
        }
    ]

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (removedPost) => {
        setPosts(posts.filter(post => post.id !== removedPost.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort]?.localeCompare(b[sort])));
    }

  return (
    <div className="app">
        <Counter></Counter>

        <PostForm create={createPost} posts={posts}></PostForm>

        <RcSelect options={sortListOptions}
                  defaultValue='Title'
                  value={selectedSort}
                  onChange={sortPosts}>
        </RcSelect>

        {posts.length !== 0
                ? <PostList remove={removePost} posts={posts}></PostList>
                : <h2 className='empty-state'>Posts not found</h2>
        }

    </div>
  );
}

export default App;
