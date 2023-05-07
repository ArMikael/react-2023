import Counter from "./components/Counter";
import '../src/styles/App.scss';
import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import RcModal from "./components/ui/rc-modal/RcModal";
import RcButton from "./components/ui/rc-button/RcButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/PostService";
import RcLoader from "./components/ui/rc-loader/RcLoader";
import useFetching from "./hooks/useFetching";

function App() {
    const [ posts, setPosts ] = useState([]);
    const [filter, setFilter] = useState({ sort: '', searchQuery: '' });
    const [modal, setModal] = useState(false);
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.searchQuery);
    const [fetchPosts, isPostsLoading, postLoadingError ] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);

    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    useEffect(() => fetchPosts, []);

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

        {postLoadingError &&
            <h2>{postLoadingError}</h2>
        }

        {!isPostsLoading
            ? <PostList remove={removePost} posts={sortedAndFilteredPosts}></PostList>
            : <div className="loader-container"
                   style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>
                <RcLoader/>
              </div>
        }

    </div>
  );
}

export default App;
