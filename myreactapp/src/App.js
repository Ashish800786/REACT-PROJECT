import React from 'react';
import {
  // BrowserRouter,
  Routes ,
   Route
  } from 'react-router-dom'
import SideNav from './Components/side_nav';
// import TopNav from './Components/top_nav';
import Footer from './Components/footer';
import Home from './Components/home';
import Roles from './Components/roles';
import Users from './Components/users';
import Products from './Components/products';
import Category from './Components/catagory';
import Profile from './Components/profile';
import ChangePassword from './Components/change_password';

function App() {
  return (
    <div className="App">
      <SideNav />
      {/* <TopNav /> */}
      {/* <BrowserRouter> */}
        <Routes >
            <Route path='/'  element={<Home title="Dashboard Title"/>} />
            <Route path='/master/roles' element={<Roles />} />
            <Route path='/master/users' element={<Users />} />
            <Route path='/master/products' element={<Products />} />
            <Route path='/master/categories' element={<Category />} />
            <Route path='/users/profile' element={<Profile />} />
            <Route path='/users/change-password' element={<ChangePassword />} />
        </Routes > 
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
