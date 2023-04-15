import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getFooterData } from "../../../api";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Row from "../Row/Row";
import { fakeData } from "../../../utils/index";

const Footer = () => {
  const { data } = useQuery({
    queryKey: ["footer"],
    queryFn: () =>
      getFooterData().then((res) => res?.data?.menus?.edges?.[0]?.node),
  });

  const useFullData = fakeData(2, () => data);

  return (
    <div className="footer bg-dark-color text-white">
      <Container>
        <div className="pt-[80px] pb-[65px]">
          <Row>
            <Col className=" w-full lg:w-3/12 md:w-6/12">
              <div className="mb-10 lg:mb-0">
                <Link to="/">
                  <img
                    className="w-[192px] h-auto max-w-full pb-[25px]"
                    src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo-white.png"
                    alt="Chakta – Auto Parts Shop WooCommerce Theme"
                  />
                </Link>

                <p className="mb-[22px] ">
                  Chúng tôi hân hạnh cung cấp các dịch  và sản phẩm tốt nhất đến với khách hàng 
                </p>

                <div className="">
                  <h5 className="text-[18px] mb-[10px] font-semibold font-poppins">Follow Us</h5>
                  <ul className="flex">
                    <li className="mr-[15px]">
                      <a href="#" className="fa-brands transition-main hover:text-main-color cursor-pointer fab fa-facebook-f"></a>
                    </li>
                    <li className="mr-[15px]">
                      <a href="#"  className="fa-brands transition-main hover:text-main-color cursor-pointer  fa-twitter"></a>
                    </li>
                    <li className="mr-[15px]">
                      <a href="#"  className="fa-brands transition-main hover:text-main-color cursor-pointer  fab fa-instagram"></a>
                    </li>
                    <li className="mr-[15px]">
                      <a href="#"  className="fa-brands transition-main hover:text-main-color cursor-pointer  fab fa-behance"></a>
                    </li>
                    <li className="mr-[15px]">
                      <a href="#"  className="fa-brands transition-main hover:text-main-color cursor-pointer  fa-youtube"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            {useFullData.map((item, index) => {
              const label = item?.name

              const nodes = item?.menuItems?.nodes ;
              return (
                <Col key={index} className={" w-full lg:w-3/12 md:w-6/12"}>
                  <div className="mb-10 lg:mb-0">
                    <h3 className=" text-2xl font-poppins font-semibold mb-[22px] lg:text-center">
                      {label}
                    </h3>
                    <div className="flex lg:justify-center lg:ml-[45px]">
                      <ul className="">
                        {nodes?.map(node => {

                          return (
                          <li key={node?.id} className="pb-[10px]">
                            <Link className="transition-main hover:text-main-color" to={`/${node?.label?.replace(" ", "-")?.toLowerCase()}`}>{node?.label}</Link>
                          </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
              );
            })}


            <Col className={"md:w-6/12 w-full lg:w-3/12"}>
              <div className="mb-10 lg:mb-0">
                <h3 className=" text-2xl font-poppins font-semibold mb-[22px]">
                  Liên hệ với chúng tôi
                </h3>
                <ul className="text-[#c5cad8]">
                  <li className="pb-[10px] relative pl-[27px]">
                    <i className="fal fa-map-marker-alt absolute text-main-color  top-[7px] left-0"></i>
                    <p>Tổ 22 Thành phố Tuyên Quang</p>
                  </li>
                  <li className="pb-[10px] relative pl-[27px] ">
                    <i className="fal fa-envelope absolute text-main-color top-[7px] left-0"></i>
                    <p>vantuanxyz741@example.com</p>
                  </li>
                  <li className="pb-[10px] relative pl-[27px]">
                    <i className="fal fa-phone absolute text-main-color top-[7px] left-0"></i>
                    <p>+84 - 0889 - 091 - 654</p>
                  </li>
                  <li className="pb-[10px] relative ">
                    <img
                      src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/payment.png"
                      alt=""
                      className=""
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="py-[30px] border-[#252525] border-t">
          <h3 className="text-[15px] text-white text-center">Copyright 2022.KlbTheme . All rights reserved</h3>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
