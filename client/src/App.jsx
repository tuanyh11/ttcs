import { useState } from "react";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Favorites } from "./Pages/Favorites";
import { Order } from "./Pages/Order";

//side bar
import Sidebar from "./components/Sidebar";
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Account from "./Pages/Account";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
const Root = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
