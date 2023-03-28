import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Header, Layout } from "./Components";
import { AddProduct, Home, ListProduct } from "./Pages";

function App() {
  return (
    <div className="App  ">
      {/* <Header/> */}

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/apps">
            <Route path="e-commerce">
              <Route index path="list-products" element={<ListProduct />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
