import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import HomeVideogames from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<LandingPage/>}/> 
       <Route path='/home' element={<HomeVideogames/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
