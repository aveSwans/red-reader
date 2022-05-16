import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header.js';
import { Posts } from './components/posts/Posts.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Posts/>
    </div>
  );
}

export default App;
