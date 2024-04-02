import { Link, Outlet, useSearchParams } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
function App() {
  let [searchParam] = useSearchParams();
  const id = searchParam.get('id');
  return (
    <div className="App">
      <div className="menu">
        <h2>Меню</h2>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <p style={{ fontWeight: 'bold' }}>page id = {id}</p>
      <h3>"Hello world, my name s Pavlov Konstantin"</h3>
      <Counter />
      <Outlet />
    </div>
  );
}

export default App;
