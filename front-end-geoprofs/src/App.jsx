// import HeaderNormal from "./components/HeaderNormal";
import './App.css'
import HeaderManager from "./components/HeaderManager";
import FrontPage from "./components/FrontPage";
import InboxPage from './components/InboxPage';
import LeaveRequestApprovePage from './components/LeaveRequestApprovePage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderManager />
      <main>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/inbox-page" element={<InboxPage/>}/>
          <Route path="/leave-request-approve" element={<LeaveRequestApprovePage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
