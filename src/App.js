import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header.js';
import { Post } from './components/post/post.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Post/>
    </div>
  );
}

export default App;
