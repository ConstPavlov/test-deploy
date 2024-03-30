import { Link, Outlet } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <div className="menu">
        <h2>Меню</h2>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      "Hello world, my name s Kostya"
      <Counter />
      <Outlet />
    </div>
  );
}

export default App;
