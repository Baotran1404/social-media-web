import './App.css';
import Authentication from './pages/Authentication/Authentication';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './Redux/Auth/auth.action';




function App() {

const {auth} = useSelector(store=>store);
const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(getProfileAction(token));
    }
  }, []);


  return (
    <div className="">
<Routes>
  {/* <Route path ="/*" element = {<HomePage/>}/> */}
  <Route path = "/*" element = {auth.user?<HomePage/>:<Authentication/>}/>
    <Route path = "/message" element = {<Message/>}/>
      <Route path = "/*" element = {<Authentication/>}/>
</Routes>

    </div>
  );
};

export default App;