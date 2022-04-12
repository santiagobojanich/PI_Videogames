import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import HomeVideogames from './components/Home';
import Detail from './components/GameDetail';
import Create from './components/Create';
import Inexistente from './components/inexistente';
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<LandingPage/>}/> 
       <Route path='/home' element={<HomeVideogames/>}/> 
       <Route exact path='/videogame' element={<Create/>} />
       <Route path='/videogame/:id' element={<Detail/>} />
      <Route path="*" element={<Inexistente />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
