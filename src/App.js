import Counter from "./components/Counter";
import '../src/styles/App.scss';
import { useState } from "react";
import PostList from "./components/PostList";

function App() {
    const [ posts ] = useState([
        { id: 101, title: 'JavaScript', body: 'Programming Language' },
        { id: 102, title: 'TypeScript', body: 'Programming Language' },
        { id: 103, title: 'ReactJs', body: 'Programming Language' },
    ]);

  return (
    <div className="app">
        <Counter></Counter>
        <PostList posts={posts}></PostList>
    </div>
  );
}

export default App;
