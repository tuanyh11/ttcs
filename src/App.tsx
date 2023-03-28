import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Header, Layout } from "./Components";
import { AddProduct, Home } from "./Pages";

function App() {
  return (
    <div className="App  ">
      {/* <Header/> */}

      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/e-commerce">
            <Route index />
          </Route>
        </Route>
      </Routes>

     
    </div>
  );
}

export default App;
