import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import User from "./Components/User";
// import AddContact from "./components/AddContact";
// import EditContact from "./components/EditContact";



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/user" element={<User />}></Route>
            {/*<Route path="/contacts/edit/:id" element={<EditContact />}></Route> */}
          </Routes>
      </BrowserRouter>
   
   </>
  );
}

export default App;

// https://www.bezkoder.com/react-node-express-mysql/
