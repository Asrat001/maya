
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './componet/Footer/Footer';
import Login from './Page/Login';
import Register from './Page/Register';
import Header from './componet/Header/Header'
import Home from './componet/Home/Home'
import Music from './componet/Music/Music'
import Guest from './componet/Yeleb/Yeleb'
import Movie from './componet/Flex/Flex'
import Searchguest from './componet/SearchGuest/SearchGust'
import Searchmovie from './componet/SearchMovie/SearchMovie'
import Searchmusic  from './componet/SearchMusic/SearchMusic'
import Display from './componet/Display/Display'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <div className='App'>
    <Header/>
    
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/add' element={<Register/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/guest' element={<Guest/>}/>
      <Route path='/smusic' element={<Searchmusic/>}/>
      <Route path='/sguest' element={<Searchguest/>}/>
      <Route path='/smovie' element={<Searchmovie/>}/>
      <Route path='/display' element={<Display/>}/>
    </Routes>
    <ToastContainer />
    <Footer/>
    </div>
  );
}

export default App;
