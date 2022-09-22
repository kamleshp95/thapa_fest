import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollUp from "./components/ScrollUp";

// styles
import "./App.css";
import "./Utils.css";
import "./Res.css";

// screens
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ScrollUp />
    </>
  );
};