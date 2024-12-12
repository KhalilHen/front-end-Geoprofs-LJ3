import './App.css'
import FrontPage from "./components/FrontPage";
import InboxPage from './components/InboxPage';
import LeaveRequestPage from './components/LeaveRequestPage';
import StatisticsPage from './components/StatisticsPage';
import Login from "./components/Login";

import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const [isHidden , setIsHidden] = useState(false);

  useEffect(() => {
    console.log(user);
    console.log(user?.access_token);
    if(user?.access_token != null && user?.expire_date != null && user?.user_id && user?.cache_id != null){
      document.cookie = ("user="+JSON.stringify({userToken:user?.access_token , userId:user?.user_id , cacheId:user?.cache_id})+"; expires="+user?.expire_date);
    }
  }, [user]);

  return (
    <BrowserRouter
      //gets rid of warnings
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
        <Routes>
          <Route path="/" element={<Login setUser={setUser}/>}/>
          <Route path="/front-page" element={<FrontPage/>}/>
          <Route path="/inbox" element={<InboxPage/>}/>
          <Route path="/leave-request" element={<LeaveRequestPage/>}/>
          <Route path="/Statistics" element={<StatisticsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
