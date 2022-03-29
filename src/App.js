import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Game from './pages/Game';
import End from './pages/End';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/end' element={<End />}/>
      </Routes>
    </div>
  );
}

export default App;
