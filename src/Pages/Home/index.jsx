import React from "react";
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
