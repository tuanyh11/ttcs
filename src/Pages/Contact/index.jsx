import React, { useState } from 'react'
import { BreadCrumb, BreadcrumbPath, Col, Row } from '../../Components'
import ContactFromLeft from './ContactForm/ContactFromLeft'
import ContactFromRight from './ContactForm/ContactFromRight'
import SliderForm from '../../Components/Common/Slider/SliderForm'
const Contact = () => {
  const [contacts, updateContacts] = useState([]);
  const [mess, setMess] = useState(false);
  return (
    <div className="list-none">
      <BreadCrumb label={'Liên Hệ Với Chúng Tôi '} />
      <div className="max-w-[1200px] ml-auto mr-auto relative">
        <Row className={'w-full !mx-0 my-0 lg:flex-row md:flex-col items-center'}>
          <Col className={'lg:w-1/3 md:w-full'}>
            <ContactFromLeft />
          </Col>
          <Col className={'lg:w-2/3 md:w-full sm:!px-[15px] !px-0'}>
            <ContactFromRight
              updateContacts={updateContacts}
              setMess={setMess}
              contacts={contacts}
              mess={mess}
            />
          </Col>
        </Row>
      </div>

      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ho%C3%A0ng%20Gia%20Thai%20Nguyen+(Ng%C3%A3%20ba%20%C4%91i%E1%BB%83m%20h%E1%BA%B9n)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className='md:w-full md:h-[750px] w-full h-[400px]'
      >
      </iframe>
      <SliderForm />
    </div>
  )
}

export default Contact