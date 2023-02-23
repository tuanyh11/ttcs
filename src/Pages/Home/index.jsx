import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { fakeData } from "../../assets/data";
import {
  Button,
  ButtonArrow,
  Col,
  Container,
  ProductCardGrid,
  ProductCardGridV2,
  Row,
} from "../../Components";
import { useDate } from "../../hooks";
import { generateStart } from "../../utils";
import Banner from "./Content/Banner";
import BestSelling from "./Content/BestSelling";
import Brand from "./Content/Brand";
import Exclusive from "./Content/Exclusive";
import Hero from "./Content/Hero";
import LastestBlog from "./Content/LastestBlog";
import Review from "./Content/Review";
import Subscribe from "./Content/Subscribe";












const Home = () => {


  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <Banner/>
      </section>

      <section>
        <Exclusive/>
      </section>

      <section>
        <Subscribe/>
      </section>

      <section>
        <BestSelling/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <LastestBlog/>
      </section>

      <section>
        <Brand/>
      </section>
    </div>
  );
};


export default Home;
