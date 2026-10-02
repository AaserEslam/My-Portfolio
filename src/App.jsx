import Home from "./Pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/Pages/NotFound";
import { Toaster } from "@/Components/UI/toaster";

const App = () => {
  return (
    <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
