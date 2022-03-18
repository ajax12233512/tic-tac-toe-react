import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
