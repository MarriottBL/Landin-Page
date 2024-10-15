import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from "./Components/HomePage/Main/mainPage";
import Admin from "./Admin/admin";




function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route  path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  </div>
);
}
  
export default App;
