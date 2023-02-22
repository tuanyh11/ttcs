import React from 'react'
import { BreadcrumbPath, Col, Row } from '../../Components'
import SliderForm from '../../Components/Common/Slider/SliderForm'
import ItemCate from './ItemCate/ItemCate'
import TitleCate from './TitleCate/TitleCate'
import dataCategory from '../../assets/data/ListCategory';
const Cate = () => {

  // console.log(dataCategory.data.productCategories.edges);
  return (
    <div>
      <BreadcrumbPath pathname={'Categories'} />
      <div className='bg-[#F7F7F7] py-[65px] px-[0px]'>
        <div className='max-w-[1200px] m-auto'>
          <TitleCate className={'md:w-[560px] m-auto p-[15px] mb-[10px] w-full'} />
          <div className='flex flex-wrap w-full'>
            {
              dataCategory.data.productCategories.edges.map((item, index) => (
                <Col className={'md:w-1/2 w-full'} key={index}>
                  <ItemCate className={'py-[15px]'} item={item} />
                </Col>

              ))

            }

          </div>

        </div>
      </div>
      <SliderForm />
    </div>
  )
}

export default Cate