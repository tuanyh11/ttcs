import { useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Header, Layout, Nav } from "./Components";
import {
  AddCategory,
  AddProduct,
  AddUser,
  EditProduct,
  EditUser,
  Home,
  ListCategories,
  ListProduct,
  Login,
  Order,
  UpdateCategory,
  User,
} from "./Pages";
import "react-day-picker/dist/style.css";
import userStore from "./store/user.store";
function App() {
  const { user } = userStore();
  return (
    <div className="App  ">
      {/* <Header/> */}

      <Routes>
          <Route path="/login" element={user ?<Navigate to={'/'}/> : <Login />} />
        <Route path="/" element={!user ? <Navigate to={'/login'}/> :  <Layout />}>

          <Route index element={<Home />} />
          <Route path="/e-commerce">
            <Route index element={<ListProduct />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="category">
              <Route index element={<ListCategories />}></Route>
              <Route path="create" element={<AddCategory />} />
              <Route path="edit/:id" element={<UpdateCategory />} />
            </Route>

            <Route path="edit-product/:id" element={<EditProduct />} />
          </Route>
          <Route path="/orders" element={<Order />} />
          <Route path="/users">
            <Route index element={<User />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-user/:id" element={<EditUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
