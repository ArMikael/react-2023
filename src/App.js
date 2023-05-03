import Counter from "./components/Counter";
import '../src/styles/App.scss';
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [ posts ] = useState([
        { id: 101, title: 'JavaScript', body: 'Programming Language' },
        { id: 102, title: 'TypeScript', body: 'Programming Language' },
        { id: 103, title: 'ReactJs', body: 'Programming Language' },
    ]);

  return (
    <div className="app">
        <Counter></Counter>

        <PostForm posts={posts}></PostForm>
        <PostList posts={posts}></PostList>
    </div>
  );
}

export default App;
