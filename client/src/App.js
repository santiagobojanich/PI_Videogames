import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import HomeVideogames from './components/Home';
import Detail from './components/GameDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<LandingPage/>}/> 
       <Route path='/home' element={<HomeVideogames/>}/> 
       <Route path='/videogame/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
