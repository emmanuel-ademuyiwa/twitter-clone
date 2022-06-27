import './App.css'
import './sass/main.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Explore from './Pages/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Homepage /> } />
          <Route path='/explore' element={ <Explore /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
