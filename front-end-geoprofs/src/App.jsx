import './App.css'
import FrontPage from "./components/FrontPage";
import InboxPage from './components/InboxPage';
import LeaveRequestPage from './components/LeaveRequestPage';
import StatisticsPage from './components/StatisticsPage';
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/front-page" element={<FrontPage/>}/>
          <Route path="/inbox" element={<InboxPage/>}/>
          <Route path="/leave-request" element={<LeaveRequestPage/>}/>
          <Route path="/Statistics" element={<StatisticsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
