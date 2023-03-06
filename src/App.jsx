import { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  Button,
  Col,
  Footer,
  Header,
  MobileNav,
  QuickView,
  Row,
} from "./Components";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import routeData from "./Routes";
import { useUiStore } from "./Components/store";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});
function createRoutes(routes) {
  return routes.map((route) => {
    const { path, component: Component, isIndex, children, ...rest } = route;
    return (
      <Route key={path} path={path} index={isIndex} element={<Component />}>
        {children && createRoutes(children)}
      </Route>
    );
  });
}

function App() {
  const [backToHeader, setBackToHeader] = useState(false);

  const {
    product,
    productWishlist,
    selectProduct,
    setIsOpeningFilterProduct,
    isOpeningFilterProduct,
    isOpeningWishlist,
    setIsOpeningWishlist,
  } = useUiStore();

  const nav = useNavigate()

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

  useEffect(() => {
    let id;
    if (isOpeningWishlist) {
      id = setTimeout(() => {
        setIsOpeningWishlist(false);
        if(!productWishlist?.isAlreadyInWishlist) {
          nav('/wishList')
        }
      }, 9000);

      
    }

    return () => clearTimeout(id);
  }, [isOpeningWishlist]);

  return (
    <div className="App relative">
      {product && (
        <QuickView {...product} onQuickViewClick={() => selectProduct(null)} />
      )}

      {Children}

      <MobileNav
        onClickOpen={() => setIsOpeningFilterProduct(!isOpeningFilterProduct)}
      />

      {isOpeningWishlist && (
        <div className={`fixed   inset-0 z-[99999999] `}>
          <div className="absolute inset-0 -z-30 bg-[#191919] opacity-50"></div>
          <div className="absolute bg-white  opacity-100 top-1/2 left-1/2 -translate-x-1/2 z-[9999999999999999] -translate-y-1/2 ">
            <div className="max-w-[360px] w-full  p-10 relative z-[9999999999999999]">
              <div className="text-center">
                <button className=" fa-solid fa-check"></button>
                <span className="block mb-[25px]">
                  {productWishlist?.isAlreadyInWishlist
                    ? `"${productWishlist?.name}" Already in Wishlist`
                    : `"${productWishlist?.name}" added to Wishlist`}
                </span>
                <div className="mb-[10px]">
                  <Button
                    className={"block w-full"}
                    Tag={"Link"}
                    to="/wishlist"
                    onClick={() => setIsOpeningWishlist(false)}
                    children={
                      <>
                        <i className="fa-regular fa-heart mr-[6px] text-base"></i>{" "}
                        VIEW WISHLIST
                      </>
                    }
                  />
                </div>
                <div className="mb-[10px]">
                  <Button
                    className={"block w-full"}
                    onClick={() => setIsOpeningWishlist(false)}
                    children={
                      <>
                        <i className="fa-sharp fa-solid fa-xmark mr-[6px] "></i>{" "}
                        CLOSE
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
