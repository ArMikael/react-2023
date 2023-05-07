import Counter from "./components/Counter";
import '../src/styles/App.scss';
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import RcModal from "./components/ui/rc-modal/RcModal";
import RcButton from "./components/ui/rc-button/RcButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [ posts, setPosts ] = useState([
        { id: 101, title: 'JavaScript', body: 'Programming Language' },
        { id: 102, title: 'TypeScript', body: 'Strongly typed programming language that builds on JavaScript' },
        { id: 103, title: 'ReactJs', body: 'Open-source front-end JavaScript library' },
    ]);

    const [filter, setFilter] = useState({ sort: '', searchQuery: '' });
    const [modal, setModal] = useState(false);
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.searchQuery);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (removedPost) => {
        setPosts(posts.filter(post => post.id !== removedPost.id));
    }

  return (
    <div className="app">
        <Counter></Counter>

        <RcButton onClick={() => setModal(true)}>Create Post</RcButton>
        <RcModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} posts={posts}></PostForm>
        </RcModal>
        <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
        <PostList remove={removePost} posts={sortedAndFilteredPosts}></PostList>
    </div>
  );
}

export default App;
