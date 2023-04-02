import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Header, Layout } from "./Components";
import { AddCategory, AddProduct, AddUser, EditProduct, Home, ListCategories, ListProduct, Order, UpdateCategory, User } from "./Pages";
import 'react-day-picker/dist/style.css';
function App() {
  return (
    <div className="App  ">
      {/* <Header/> */}

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
            <Route path="/e-commerce">
              <Route index  element={<ListProduct />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="category"  >
                  <Route index element={<ListCategories/>}></Route>
                  <Route path="create" element={<AddCategory/>}/>
                  <Route path="edit/:id" element={<UpdateCategory/>}/>
              </Route>

              <Route  path="edit-product/:id" element={<EditProduct />} />   
              
            </Route>
            <Route path="/orders" element={<Order />} />
            <Route path="/users"  >
              <Route index element={<User />} />
              <Route path="add-user" element={<AddUser />} />
            </Route>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
