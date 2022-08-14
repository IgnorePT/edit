import {Route, Routes} from 'react-router-dom';
import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinations />} />
      </Routes>
    </div>
  );
}

export default App;
