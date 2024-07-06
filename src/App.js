import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/profile/Profile';
import axios from 'axios';
// only three lines or in this file marked with '//...'
import 'react-toastify/dist/ReactToastify.css';//...
import {ToastContainer} from 'react-toastify';//...
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './redux/features/auth/authSlice';
// import Loader from './components/loader/Loader';
// import {Spinner} from './components/loader/Loader';

const App = () => { // 09:13:00
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginStatus())
  }, [dispatch])
  return(
    <React.Fragment>
      <BrowserRouter>
      {/* <ToastContainer />//... */}
      {/* <Loader /> */}
        <Header />
        {/* <Spinner /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;