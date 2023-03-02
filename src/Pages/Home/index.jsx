import React from "react";
import { useQueries, useQuery } from "react-query";
import { getBestSellingProducts, getCars, getExclusiveProducts, getHomepageData, getLatestBlog } from "../../api";
import Banner from "./Content/Banner";
import BestSelling from "./Content/BestSelling";
import Brand from "./Content/Brand";
import Exclusive from "./Content/Exclusive";
import Hero from "./Content/Hero";
import LatestBlog from "./Content/LatestBlog";
import Review from "./Content/Review";
import Subscribe from "./Content/Subscribe";

const Home = () => {

  const {data} = useQuery({
    queryKey: ['homeData'],
    queryFn:  () => Promise.all([
       getHomepageData().then((res) => res?.data?.page?.acf?.component),
       getExclusiveProducts().then((res) => res?.data?.products?.edges),
       getBestSellingProducts().then((res) => res?.data?.products?.edges),
       getLatestBlog(3).then((res) => res.data),
       getCars(res => res)
    ]).then(([sectionData, exclusiveProduct, bestSellingProduct, latestBlog, carData]) => {
      return { sectionData, exclusiveProduct, bestSellingProduct, latestBlog, carData };
    }),
    refetchOnWindowFocus: false,
  })


  const carData = data?.carData

  const sectionData  = data?.sectionData
  const exclusiveProduct  = data?.exclusiveProduct
  const bestSellingProduct = data?.bestSellingProduct
  const latestBlog = data?.latestBlog

  const sectionOne = sectionData?.find(data => data?.fieldGroupName === 'Page_Acf_Component_Banner')
  const sectionTwo = sectionData?.find(data => data?.fieldGroupName === 'Page_Acf_Component_ImageWithTextCol')
  const subscribeData = sectionData?.find(data => data?.fieldGroupName === 'Page_Acf_Component_ImageWithText')
  const quoteData = sectionData?.find(data => data?.fieldGroupName === 'Page_Acf_Component_Quote')



  return (
    <div>
      <section>
        <Hero data={{...sectionOne, ...carData}}  />
      </section>

      <section>
        <Banner data={sectionTwo}/>
      </section>

      <section>
        <Exclusive data={exclusiveProduct} />
      </section>

      <section>
        <Subscribe data={subscribeData}/>
      </section>

      <section>
        <BestSelling data={bestSellingProduct}/>
      </section>

      <section>
        <Review data={quoteData}/>
      </section>

      <section>
        <LatestBlog data={latestBlog}/>
      </section>

      <section>
        <Brand/>
      </section>
    </div>
  );
};


export default Home;
