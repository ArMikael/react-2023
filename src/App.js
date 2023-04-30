import Counter from "./components/Counter";
import '../src/styles/App.scss';
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="app">
      <Counter></Counter>
      <PostItem post={{ id: 101, title: 'JavaScript', body: 'Programming Language' } }></PostItem>
    </div>
  );
}

export default App;
