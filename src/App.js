import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Services/Services';
import Service from './Pages/Service/Service';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequarAuth from './Pages/Login/RequarAuth/RequarAuth';
import TrainerDetails from './Pages/TrainerDetails/TrainerDetails';
import Trainer from './Pages/Trainer/Trainer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/trainer' element={<Trainer></Trainer>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/trainer/:trainerId' element={<TrainerDetails></TrainerDetails>}></Route>
        <Route path='/checkout' element={
          <RequarAuth>
            <CheckOut></CheckOut>
          </RequarAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
