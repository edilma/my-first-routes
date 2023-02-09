

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/" element={<Welcome/>}/>

        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
