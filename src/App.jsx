import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { BreadCrumb, Col, Footer, Header, Row } from "./Components";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import routeData from "./Routes";

function App() {
  const [backToHeader, setBackToHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setBackToHeader(true);
      } else {
        setBackToHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backToHeaderHandler = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const Children = useMemo(() => {
    return (
      <>
        <Header />

        <Routes>
          <Route  path={'/'} element={<Navigate to={'/home'} />} />
          {routeData.map(({ path, component: Component, childrens }, index) => {

            if(childrens.length > 0 ) {
              return <Route key={index} path={path} element={<Component/>} >
                {
                  childrens.map(({ path, component: ComponentChil, childrens }, index) => {
                    return <Route key={index} path={path} element={<ComponentChil />} />;
                  })
                }
              </Route>
            }
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
        <Footer />
      </>
    );
  }, []);

  return (
    <div className="App relative">
      {Children}

      <div className="fixed z-[999999] bottom-0 right-0 left-0 text-[21px] text-[#9b9b9b] lg:hidden">
        <Row className={"bg-white text-center"}>
          <Col className={"w-3/12"}>
            <div className="py-5">
              <Link to={"/"} className="fa-solid fa-house "></Link>
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5">
              <Link to="/shop" className="fa-solid fa-table-cells-large"></Link>
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5 relative">
              <Link to={"/cart"} className="fa-solid fa-cart-shopping"></Link>
              <span className="w-[18px] h-[18px] text-white text-[10px] rounded-full bg-main-color block text-center leading-[18px] absolute z-10 top-1/2 -translate-y-full -translate-x-1/2 right-0">1</span>
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5">
              <button className="fa-solid fa-user"></button>
            </div>
          </Col>
        </Row>
      </div>

      {backToHeader && (
        <div className="fixed z-[999999] bottom-[50px] right-[30px]">
          <button
            onClick={() => backToHeaderHandler()}
            className="fa-solid fa-angle-up w-[50px] h-[50px] bg-main-color text-white rounded-full"
          ></button>
        </div>
      )}
    </div>
  );
}

export default App;
