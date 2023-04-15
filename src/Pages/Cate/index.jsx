import React from 'react'
import { BreadcrumbPath, Col, Row } from '../../Components'
import SliderForm from '../../Components/Common/Slider/SliderForm'
import ItemCate from './ItemCate/ItemCate'
import TitleCate from './TitleCate/TitleCate'
import dataCategory from '../../assets/data/ListCategory';
import { useQuery } from 'react-query'
import { getCategories } from '../../api/product'

const Cate = () => {

 const {data} = useQuery({
    queryFn: getCategories,
    queryKey: ['get-categories']
  })

  console.log(data);
  return (
    <div>
      <BreadcrumbPath pathname={'Categories'} />
      <div className='bg-[#F7F7F7] py-[65px] px-[0px]'>
        <div className='max-w-[1200px] m-auto'>
          <TitleCate className={'md:w-[560px] m-auto p-[15px] mb-[10px] w-full'} />
          <div className='flex flex-wrap w-full'>
            {
              data?.map((item, index) => (
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