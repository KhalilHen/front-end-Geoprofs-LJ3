// import HeaderNormal from "./components/HeaderNormal";
import './App.css'
import HeaderManager from "./components/HeaderManager";
import FrontPage from "./components/FrontPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderManager />
      <main>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
