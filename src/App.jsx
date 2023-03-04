import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Col, Footer, Header, QuickView, Row } from "./Components";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import routeData from "./Routes";
import { useUiStore } from "./Components/store";

function createRoutes(routes) {
  return routes.map((route) => {
    const { path, component: Component, isIndex, children, ...rest } = route;
    return (
      <Route
        key={path}
        path={path}
        index={isIndex}

        element={ <Component />}
      >
        {children && createRoutes(children)}
      </Route>
    );
  });
}

function App() {
  const [backToHeader, setBackToHeader] = useState(false);

  const {
    product,
    selectProduct,
    setIsOpeningFilterProduct,
    isOpeningFilterProduct,
  } = useUiStore();

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
          <Route path={"/"} element={<Navigate to={"/home"} />} />
        {createRoutes(routeData)}

        </Routes>
        <Footer />
      </>
    );
  }, []);

  const { pathname } = useLocation();

  return (
    <div className="App relative">
      {product && (
        <QuickView {...product} onQuickViewClick={() => selectProduct(null)} />
      )}

      {Children}

      <div className="fixed z-[999999] bottom-0 right-0 left-0 text-[21px] text-[#9b9b9b] lg:hidden shadow-[(0_.5rem_1rem_rgba(0,0,0,.15))]">
        <div className={"bg-white text-center flex"}>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px] ">
              <Link to={"/"} className="fal text-[21px] font-medium fa-home "></Link>
            </div>
          </div>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px] ">
              {pathname !== "/shop" ? (
                <Link to="/shop" className="fal text-[21px] font-medium fa-th-large"></Link>
              ) : (
                <button
                  onClick={() =>
                    setIsOpeningFilterProduct(!isOpeningFilterProduct)
                  }
                  className="fal text-[21px] font-medium fa-filter"
                ></button>
              )}
            </div>
          </div>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px]  relative">
              <Link to={"/cart"} className="fal text-[21px] font-medium fa-shopping-cart"></Link>
              <span className="w-[18px] h-[18px] text-white text-[10px] rounded-full bg-main-color block text-center leading-[18px] absolute z-10 top-1/2 -translate-y-full  right-[20px]">
                1
              </span>
            </div>
          </div>
          <div className={"w-3/12"}>
            <div className="py-5 px-[7px] ">
              <Link to={"/my-account"} className="fal text-[21px] font-medium fa-user-circle"></Link>
            </div>
          </div>
        </div>
      </div>

      {backToHeader && (
        <div className="fixed z-[999999] bottom-[50px] right-[30px]">
          <button
            onClick={() => backToHeaderHandler()}
            className="fas fa-angle-up text-[20px] hover:bg-black transition-main font-black w-[50px] h-[50px] bg-main-color text-white rounded-full"
          ></button>
        </div>
      )}
    </div>
  );
}

export default App;
