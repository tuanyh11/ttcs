import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Col, Footer, Header, QuickView, Row } from "./Components";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import routeData from "./Routes";
import { useUiStore } from "./Components/store";
import Sidebar from "./Pages/Shop/Sidebar";

function App() {
  const [backToHeader, setBackToHeader] = useState(false);

  const { product, selectProduct, setIsOpeningFilterProduct, isOpeningFilterProduct } = useUiStore();

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
          {routeData.map(({ path, component: Component, children }, index) => {
            if (children.length > 0) {
              return (
                <Route key={index} path={path} element={<Component />}>
                  {children.map(
                    (
                      { path, component: ComponentChil, children, index },
                      i
                    ) => {
                      return (
                        <Route
                          key={i}
                          index={index}
                          path={path}
                          element={<ComponentChil />}
                        />
                      );
                    }
                  )}
                </Route>
              );
            }
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
        <Footer />
      </>
    );
  }, []);

  console.log(isOpeningFilterProduct);


  const { pathname } = useLocation();

  return (
    <div className="App relative">
      {product && (
        <QuickView {...product} onQuickViewClick={() => selectProduct(null)} />
      )}

      {Children}

      <div className="fixed z-[999999] bottom-0 right-0 left-0 text-[21px] text-[#9b9b9b] lg:hidden">
        <Row className={"bg-white text-center"}>
          <Col className={"w-3/12"}>
            <div className="py-5">
              <Link to={"/"} className="fal fa-home "></Link>
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5">
              {pathname !== "/shop" ? (
                <Link to="/shop" className="fal fa-th-large"></Link>
              ) : (
                <button onClick={() => setIsOpeningFilterProduct(!isOpeningFilterProduct)} className="fal fa-filter"></button>
              )}
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5 relative">
              <Link to={"/cart"} className="fal fa-shopping-cart"></Link>
              <span className="w-[18px] h-[18px] text-white text-[10px] rounded-full bg-main-color block text-center leading-[18px] absolute z-10 top-1/2 -translate-y-full -translate-x-1/2 right-0">
                1
              </span>
            </div>
          </Col>
          <Col className={"w-3/12"}>
            <div className="py-5">
              <Link to={"/my-account"} className="fal fa-user-circle"></Link>
            </div>
          </Col>
        </Row>
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
