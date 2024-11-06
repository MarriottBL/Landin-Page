import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from "./Admin/admin";
import './App.css';
import ProfilePage from "./Components/HomePage/Main/mainPage";

//Debugging routes
// console.log("backend API URL:", process.env.REACT_APP_API_URL);


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
