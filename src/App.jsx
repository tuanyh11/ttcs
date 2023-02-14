import { useState } from "react";
import "./App.css";
import { BreadCrumb, Footer, Header } from "./Components";
import { Route, Routes } from "react-router-dom";
import routeData from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
  
      <Routes>
        {routeData.map(({ path, component: Component }, index) => {
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
