import { useState } from 'react'

import Index from "./pages/Index";
import Login from './pages/Login';
import NotFound from './pages/Error404';
import Blank from './pages/Blank';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} exact>
        {" "}
      </Route>
      <Route path="/index" element={< Index />} exact>
        {" "}
      </Route>
      
      <Route path="/blank" element={<Blank/>} exact>
        {" "}
      </Route>
      

      <Route path="*" element={<NotFound />} />
    </Routes>
    
  </BrowserRouter>
  )
}

export default App
