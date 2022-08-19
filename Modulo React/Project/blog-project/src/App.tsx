import {Route, Routes} from 'react-router-dom';
import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import { globalStyles } from './stitches.config';

function App() {

  globalStyles();
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
