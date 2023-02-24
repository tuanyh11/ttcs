import React, { useState } from 'react'
import { Col, ProductCardGrid, Row } from '../../../Components';
import { useProductDetailContext } from '../../../hooks';
import product from '../../../assets/data/product';

const Footer = () => {
  const [page, setPage] = useState("description");

  const {state: data} = useProductDetailContext()
  

  return (
    <div>
          <div className="pt-20 pb-[70px] ">
              <ul className="md:flex border-b-[2px] border-[#ddd] mb-[30px]">
                <li
                  onClick={() => setPage("description")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]   after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "description"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Description
                </li>
                <li
                  onClick={() => setPage("additional")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "additional"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Additional information
                </li>
                <li
                  onClick={() => setPage("reviews")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "reviews"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Reviews ({data?.commentCount})
                </li>
              </ul>

              <div className="">
                {page === "description" && (
                  <div className="">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                  </div>
                )}
                {page === "additional" && (
                  <div className="">
                    <table className="border border-collapse w-full">
                      <tbody>
                        <tr>
                          <th className="p-2 text-start text-black border">
                            {"Brand"}
                          </th>
                          <td className="p-2">
                            <span className="klb-vehicle-data">
                              <ul>
                                <li
                                  dangerouslySetInnerHTML={{
                                    __html: "AD Auto Parts",
                                  }}
                                />
                              </ul>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <div className="pb-5 text-[20px] border-b-[2px] border-[#ddd] mb-[45px]">
                Related products
              </div>

              <Row>
                {product?.data?.products?.edges?.slice(0, 4)?.map((product) => {
                  const node = product?.node;
                  return (
                    <Col className=" md:w-6/12 lg:w-3/12 mb-[30px] md:mb-0" key={node?.id}>
                      <ProductCardGrid
                        {...node}
                        image={
                          "https://klbtheme.com/chakta/wp-content/uploads/2021/01/08.jpg"
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
    </div>
  )
}

export default Footer