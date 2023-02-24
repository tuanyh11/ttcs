import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { getProductDetail } from "../../api";
import {
  BreadCrumb,
  Col,
  Container,
  NextButton,
  PreButton,
  Row,
} from "../../Components";
import ButtonV1 from "../../Components/Common/Button/Button";
import { fakeData, generateStart } from "../../utils";

const images = fakeData(5, (i) => {
  return {
    url: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-${
      i + 1
    }-600x600.jpg`,
  };
});

const ProductDetail = () => {
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    focusOnSelect: true,
  };

  const settings2 = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    nextArrow: (
      <NextButton classCustom={"!translate-y-[10%] btn-right !right-14 "} />
    ),
    prevArrow: (
      <PreButton classCustom={"!translate-y-[10%] btn-left !left-10 "} />
    ),
    focusOnSelect: true,
  };

  const [page, setPage] = useState('description')

  const id = useParams()?.id;

  const { data, isLoading, error } = useQuery(["product", id], () =>
    getProductDetail().then((res) => res.data?.product)
  );

  console.log(data);

  const [value, setValue] = useState(1);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      return;
    }
    if (!/[\d]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  

  return (
    <div>
      <BreadCrumb />
      <div className="py-20 bg-[#f7f7f7]">
        <Container>
          <Row>
            <Col className={"w-6/12"}>
              <div className="">
                <Slider {...settings1} ref={slider1}>
                  {images.map((image, index) => {
                    console.log(image);

                    return (
                      <div key={index} className="">
                        <img
                          className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                          src={image.url}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>

                <Slider
                  {...settings2}
                  ref={slider2}
                  className="-mx-[3px] product-detail-slider"
                >
                  {images.map((image, index) => {
                    return (
                      <div key={index}>
                        <div className=" w-full px-1">
                          <img
                            className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                            src={image.url}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col className={"w-full md:w-6/12"}>
              <div className="py-[50px] px-[70px] bg-white ">
                <h3 className="text-[27px] mb-[10px] font-poppins text-black font-semibold">
                  {data?.name}
                </h3>

                <div className="flex items-center">
                  <div>{generateStart(data?.averageRating)}</div>
                  <p className="ml-2">(1 customer review)</p>
                </div>

                <p className="mb-5 mt-3 font-poppins font-semibold ">
                  <del className="text-[#696969] text-sm mr-1 ">
                    {data?.salePrice}
                  </del>
                  <span className="text-main-color text-[19px] ">
                    {data?.regularPrice}
                  </span>
                </p>

                <div
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: data?.shortDescription }}
                />

                <table className=" border border-collapse w-full  ">
                  {data?.act_product?.table?.map((table, i) => {
                    const row = table?.row;
                    return (
                      <tbody key={i}>
                        {row?.map((cell, j) => {
                          return (
                            <tr key={j}>
                              <th className="p-2 text-start text-black">
                                {cell?.head}
                              </th>
                              <td>
                                <span className="klb-vehicle-data">
                                  <ul>
                                    <li
                                      dangerouslySetInnerHTML={{
                                        __html: cell?.data,
                                      }}
                                    />
                                  </ul>
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    );
                  })}
                </table>
                <div className="mt-[25px] mb-5">
                  <h3 className="pb-5 ">In Stock</h3>
                  <div className="flex">
                    <button
                      onClick={() => setValue(Math.max(1, value - 1))}
                      className="fa-solid fa-minus w-[50px] h-[50px] border"
                    ></button>
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      onBlur={(e) => e.target.value === "" && setValue(1)}
                      className="w-[50px] h-[50px] border outline-none text-center"
                    />
                    <button
                      onClick={() => setValue(value + 1)}
                      className="fa-solid fa-plus w-[50px] h-[50px] border"
                    ></button>
                    <div className="ml-3">
                      <ButtonV1 label={"ADD TO CART"} />
                    </div>
                  </div>
                </div>

                <div className="">
                  {data?.sku && (
                    <div className="uppercase mb-[10px]">
                      <span className="text-black font-medium">Sku:</span>
                      <span className="ml-2">{data?.sku}</span>
                    </div>
                  )}
                  {data?.productCategories && (
                    <div className="capitalize flex mb-[10px] ">
                      <span className="text-black font-medium">Category:</span>
                      <div className="ml-2">
                        {data?.productCategories?.edges.map((category, i) => {
                          const node = category?.node;
                          return (
                            <Link
                              key={node?.id}
                              className=" capitalize"
                              to={`/category/${node.id}`}
                            >
                              {node.name} {i === 3 - 1 ? "" : ", "}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex">
                    <span className="text-black font-medium">Share:</span>
                    <div className="ml-2">
                      {[...new Array(3)].map((_, i) => {
                        return (
                          <Link
                            key={i}
                            className=" capitalize"
                            to={`/category/:1`}
                          >
                            <i className="fa-brands fa-facebook text-lg ml-2"></i>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-20 pb-[70px]">
        <Container>
          <ul className="flex border-b-[2px] border-[#ddd] mb-[30px]">
            <li
              onClick={() => setPage('description')}
              className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${page === 'description'? 'after:bg-main-color after:opacity-100' : ' after:opacity-0'}`}
            >
              Description
            </li>
            <li
              onClick={() => setPage('additional')}
              className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${page === 'additional'? 'after:bg-main-color after:opacity-100' : ' after:opacity-0'}`}
            >
              Additional information
            </li>
            <li
              onClick={() => setPage('reviews')}
              className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${page === 'reviews'? 'after:bg-main-color after:opacity-100' : ' after:opacity-0'}`}
            >
              Reviews (1)
            </li>
          </ul>

          <div className="">
            <div className="">
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            </div>

            <div className="">
              <table className="border border-collapse w-full">

                <tbody >
                
                      <tr >
                        <th className="p-2 text-start text-black border">
                          {'Brand'}
                        </th>
                        <td className="p-2">
                          <span className="klb-vehicle-data">
                            <ul>
                              <li
                                dangerouslySetInnerHTML={{
                                  __html: 'AD Auto Parts',
                                }}
                              />
                            </ul>
                          </span>
                        </td>
                      </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};


export default ProductDetail;

function Comment({ comment, getDate, children, showReply, onReply, onCancel }) {
  const authorName = comment?.author?.node?.name;

  const avatar = comment?.author?.node?.avatar?.url;

  return (
    <div>
      <div className="mb-10">
        <div className="flex ">
          <div className="min-w-[90px] min-h-[90px] h-[90px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>

          <div className="ml-[30px]">
            <div className="">
              <span className=" text-[18px]  font-medium text-dark-color">
                {authorName}
              </span>
              <span className="ml-3">{getDate()}</span>
            </div>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{ __html: comment?.content }}
            ></div>
            <button
              onClick={() => onReply(comment.id)}
              className=" font-medium transition hover:text-main-color"
            >
              Reply
              <i className="fa-solid fa-arrow-right-long ml-[10px]"></i>
            </button>
          </div>
        </div>
      </div>

      {showReply(comment.id) && (
        <CommentForm nameUser={authorName} onCancel={onCancel} />
      )}

      {children.map((commentChil) => {
        return (
          <div key={commentChil?.id} className="md:pl-[60px]">
            <Comment
              comment={commentChil}
              getDate={getDate}
              children={[]}
              onCancel={onCancel}
              onReply={() => onReply(commentChil.id)}
              showReply={showReply}
            />
          </div>
        );
      })}
    </div>
  );
}

