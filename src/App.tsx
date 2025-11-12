// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DynamicRoutes from "./components/DynamicRoutes";
// Example pages (you can replace these later)
const App = () => {
  return(

    <BrowserRouter>
      <NavBar/>
      <DynamicRoutes/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
