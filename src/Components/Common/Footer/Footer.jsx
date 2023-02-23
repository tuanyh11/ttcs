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
                  Sed perspiciatis unde omnis natus error voluptatem accusan
                  doloreqe laudantium totam aperiam eaque sipsa quae abillo
                  inventore
                </p>

                <div className="">
                  <h5 className="text-[18px] mb-[10px]">Follow Us</h5>
                  <ul className="flex">
                    <li className="mr-[15px]">
                      <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li className="mr-[15px]">
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li className="mr-[15px]">
                      <i className="fa-brands fa-instagram"></i>
                    </li>
                    <li className="mr-[15px]">
                      <i className="fa-brands fa-youtube"></i>
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
                            <Link to={`/${node?.label?.replace(" ", "-")?.toLowerCase()}`}>{node?.label}</Link>
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
                  Contact Us
                </h3>
                <ul className="text-[#c5cad8]">
                  <li className="pb-[10px] relative pl-[27px]">
                    <i className="fa-solid fa-location-dot absolute text-main-color  top-[7px] left-0"></i>
                    <p>250 Main Street. 2nd Floor D - Block, New York</p>
                  </li>
                  <li className="pb-[10px] relative pl-[27px] ">
                    <i className="fa-solid fa-envelope absolute text-main-color top-[7px] left-0"></i>
                    <p>support@example.com</p>
                  </li>
                  <li className="pb-[10px] relative pl-[27px]">
                    <i className="fa-solid fa-phone absolute text-main-color top-[7px] left-0"></i>
                    <p>+898 - 123 - 456 - 98</p>
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
      </Container>
    </div>
  );
};

export default Footer;
