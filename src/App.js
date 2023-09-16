import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import Practise from './components/Practise';
import ResponsiveAppBar from './components/BarPractise'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import BasicTabs from './components/TabPractise';
import Product from './components/Product';
import { Home } from '@mui/icons-material';
import LoginPractise from './components/LoginPractise';
import SearchPractise from './components/SearchPractise';
import ListPractise from './components/ListPractise';
import AboutPractise from './components/AboutPractise';
import HomePractise from './components/HomePractise';

function App() {

  // const router =[
  //   {
  //     exact path:"/",
  //     component: Home
  //   }
  // ]
  console.log("hi")
  return (
    <div >
      {/* <h1>heloo</h1>
      <ValidationTextFields/> */}
      {/* <RegisterForm/> */}
      {/* <Practise/> */}
      {/* <ResponsiveAppBar/> */}
{/* 
      <BrowserRouter>
          <Routes>
            <Route exact path ='/' element={<BasicTabs/>}/>
            <Route exact path ='/Product' element={<Product/>}/>
          </Routes>
       
      </BrowserRouter> */}
      <BrowserRouter>
      <nav style={{display:"flex", gap:"40px", justifyContent:"center"}}>
        <Link to ='/'>Home</Link>
        <Link to ='LoginPractise'>Login</Link>
        <Link to ='Product'>Product</Link>
      </nav>
      <Routes>
        <Route exact path ='/' element={<HomePractise/>}/>
        <Route  path ='/LoginPractise' element={<LoginPractise/>}/>
        <Route  path ='/Product' element={<Product/>}/>
          <Route path='/search' element={<SearchPractise/>}/>
          <Route path='/list' element={<ListPractise/>}/>
          <Route path='/about' element={<AboutPractise/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
