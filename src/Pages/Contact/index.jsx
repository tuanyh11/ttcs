import React from 'react'
import { BreadCrumb, BreadcrumbPath, Col, Row } from '../../Components'
import ContactFromLeft from './ContactForm/ContactFromLeft'
import ContactFromRight from './ContactForm/ContactFromRight'
import SliderForm from '../../Components/Common/Slider/SliderForm'
const Contact = () => {
  return (
    <div className="list-none">
      <BreadcrumbPath pathname={'Contact Us'} />
      <div className="max-w-[1200px] ml-auto mr-auto relative">
        <Row className={'w-full !mx-0 my-0 lg:flex-row md:flex-col'}>
          <Col className={'lg:w-1/3 md:w-full'}>
            <ContactFromLeft />
          </Col>
          <Col className={'lg:w-2/3 md:w-full'}>
            <ContactFromRight />
          </Col>
        </Row>
      </div>

      <iframe style={{ width: '100%', height: '750px' }}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ho%C3%A0ng%20Gia%20Thai%20Nguyen+(Ng%C3%A3%20ba%20%C4%91i%E1%BB%83m%20h%E1%BA%B9n)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

      </iframe>
      <SliderForm />
    </div>
  )
}

export default Contact