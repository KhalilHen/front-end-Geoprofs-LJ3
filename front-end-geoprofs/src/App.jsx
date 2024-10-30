// import HeaderNormal from "./components/HeaderNormal";
import './App.css'
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
