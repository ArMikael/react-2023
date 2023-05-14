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
import {getPageCount} from "./utils/pagination";
import RcPagination from "./components/ui/rc-pagination/RcPagination";

function App() {
    const [ posts, setPosts ] = useState([]);
    const [filter, setFilter] = useState({ sort: '', searchQuery: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.searchQuery);

    const [fetchPosts, isPostsLoading, postLoadingError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setLimit(totalCount / limit);
        setTotalPages(getPageCount(totalCount, limit));
    });


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const removePost = (removedPost) => {
        setPosts(posts.filter(post => post.id !== removedPost.id));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
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

       <RcPagination
           page={page}
           totalPages={totalPages}
           changePage={changePage}
       />
    </div>
  );
}

export default App;
