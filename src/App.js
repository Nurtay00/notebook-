import logo from './logo.svg';
import './App.css';
import Menu from "./components/menu";
import Editor from "./components/editor";
import Categories from "./components/categories";

function App() {
  return (
    <div className='wrapper'>
      <Menu/>
      <Editor/>
      <Categories/>
    </div>
  );
}

export default App;
