import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ScaleLoader } from "react-spinners";
import { searchCarModel } from "../../../api";
import {
  ButtonArrow,
  Col,
  Container,
  Row,
  SelectorV2,
} from "../../../Components";

const Hero = ({ data }) => {
  const cars = data?.cars?.edges?.map(({ node }) => ({ ...node }));

  const [car, setCar] = useState();

  const [models, setModels] = useState([]);

  const [selectModel, setSelectModel] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [selectYear, setSelectYear] = useState([]);

  useEffect(() => {
    setCar(cars?.[0]);
  }, [data]);

  const handleSearchModel = async () => {
    const data = await searchCarModel(car?.id);
    setModels(data?.map(({ node }) => ({ ...node })));
    setSelectModel(data?.[0]?.node);
    setIsLoading(false);
  };

  const handLeOnSelect = (car) => {
    handleSearchModel();
    setCar(car);
    setIsLoading(true);
  };

  const years = data?.years?.edges?.map(({ node }) => ({ ...node }));

  console.log(selectYear);

  return (
    <div>
      <div
        className=" pb-[100px] pt-[90px] md:py-[100px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${`${data?.image?.mediaItemUrl}`})`,
        }}
      >
        <div className="">
          <Container>
            <Row>
              <Col className={"w-full lg:w-8/12"}>
                <div className="md:p-[70px] md:pb-[80px] p-5 bg-white font-semibold">
                  <div className="">
                    <Slider fade={true}>
                      <div className="relative z-[9999]">
                        <h3 className="mb-6 uppercase text-[#4bc871] underline font-bold ">
                          ưu đãi tuyệt vời cho mọi ô tô và ô tô
                        </h3>
                        <h1 className="text-[32px] tracking-tighter text-dark-color md:text-[48px] leading-[44px] md:leading-[60px]  lg:text-[70px] lg:leading-[70px] font-semibold mb-5 font-poppins">
                          Giảm 25% Cho Dịch Vụ Xe Ô Tô
                        </h1>
                        <p className="text-dark-color font-normal pb-5">
                          Được tạo ra từ những nguyên liệu tự nhiên, sản phẩm
                          này mang lại cho bạn trải nghiệm tuyệt vời và đầy thú
                          vị.
                        </p>
                        <div>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px]  inline-block  mb-2 text-center md:mr-2 text-[14px] px-[40px]  leading-[29px] rounded-[28px]"
                          >
                            Mua Ngay
                          </ButtonArrow>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px]  inline-block text-[14px] text-center px-[40px]  leading-[29px] rounded-[28px] bg-white hover:border-main-color transition-main hover:text-white  hover:bg-main-color border-2 border-[#eaeaea] border-solid text-[#777777]"
                          >
                            Đọc Thêm
                          </ButtonArrow>
                        </div>
                      </div>
                      <div className="relative z-[9999]">
                        <h3 className="mb-6 uppercase text-[#4bc871] underline">
                          ưu đãi tuyệt vời cho mọi ô tô và ô tô
                        </h3>
                        <h1 className="text-[32px] tracking-tighter md:text-[48px] lg:text-[70px] font-semibold leading-[44px] md:leading-[60px] lg:leading-[70px] text-dark-color mb-5 font-poppins">
                          Giảm 35% Cho Dịch Vụ Xe Ô Tô
                        </h1>
                        <p className="text-dark-color font-normal pb-5  max-[320px]:hidden">
                          Được tạo ra từ những nguyên liệu tự nhiên, sản phẩm
                          này mang lại cho bạn trải nghiệm tuyệt vời và đầy thú
                          vị.
                        </p>
                        <div>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] mb-2 mr-2 text-[14px] px-[40px]  leading-[29px] rounded-[28px]"
                          >
                            Mua Ngay
                          </ButtonArrow>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] text-[14px] px-[40px]  leading-[29px] rounded-[28px] bg-white border-2 border-[#eaeaea] border-solid text-[#777777]"
                          >
                            Đọc Thêm
                          </ButtonArrow>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <div className="mx-[15px] md:mx-0">
          <div
            className="mt-[100px] mb-[-215px] bg-main-color max-w-[1400px] mx-auto py-10 md:py-[60px] px-[15px] md:px-[115px] rounded-[20px]  "
            style={{
              backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/filter-bg.png"})`,
            }}
          >
            <h1 className="text-white text-lg md:text-2xl text-center font-semibold font-poppins mb-[30px]">
            Hơn 2500 Ô tô. Tìm phụ tùng ô tô của bạn
            </h1>
            <Row>
              <Col className="w-full lg:w-3/12 mb-5 ">
                <div className="">
                  <SelectorV2
                    title={car?.name || "Select Make"}
                    setTitle={(car) => handLeOnSelect(car)}
                    data={cars}
                    isSelected={(item) => item?.name === car?.name}
                  />
                </div>
              </Col>

              <Col className="w-full lg:w-3/12 mb-5 relative">
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 z-40  -translate-x-1/2 -translate-y-1/2">
                    <ScaleLoader color="#ff4545" />
                  </div>
                )}
                <div className="">
                  <SelectorV2
                    title={selectModel?.name || "Select Model"}
                    setTitle={(model) => setSelectModel(model)}
                    data={models}
                    disabled={models.length === 0}
                    isSelected={(model) => model?.name === selectModel?.name}
                  />
                </div>
              </Col>

              <Col className="w-full lg:w-3/12 mb-5">
                <SelectorV2
                  title={selectYear?.year || "Select Year"}
                  setTitle={(year) => setSelectYear(year)}
                  data={years}
                  disabled={years?.length === 0}
                  disPlayKey={(year) => year?.year}
                  isSelected={(year) => year?.year === selectYear?.year}
                />
              </Col>

              <Col className="w-full lg:w-3/12 mb-5">
                <div className="">
                  <Link
                    to={"/shop"}
                    className=" text-[14px] font-semibold line-clamp-1 relative w-full text-center transition-all duration-[400]  outline-none   font-poppins py-[11px] px-[15px] xl:px-[35px] bg-main-color border-2 border-white border-solid hover:bg-white hover:text-main-color text-white   rounded-[28px]"
                  >
                    <span className="uppercase">find auto parts</span>
                    <i className="fa-solid fa-circle-arrow-right  ml-3"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
