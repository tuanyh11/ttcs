import React from 'react'
import { useLocation } from 'react-router-dom';
import data from '../../assets/data/Aboutus';
import { BreadcrumbPath, SliderForm } from '../../Components';
import ContentTop from './ContentTop/ContentTop';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import LatestNew from './LatestNew/LatestNew';
import OurMainGoals from './OurMainGoals/OurMainGoals';
import './style.css';
import TeamMembers from './TeamMembers/TeamMembers';
const About = () => {
  // const { pathname } = useLocation();
  // console.log(pathname);
  let dataAbout = data.data.pages.edges.filter(item => item.node.title.includes('About'));
  // console.log(dataAbout);
  let dataContent = [];
  if (dataAbout !== null) {
    dataContent = dataAbout[0].node.acf.component
  }
  // console.log(dataContent);

  let contentTop = [];
  if (dataContent !== null) {
    contentTop = dataContent[0]
  }
  // console.log(contentTop);

  let ourMainGoals = [];
  if (dataContent !== null) {
    ourMainGoals = dataContent[1].content
  }
  // console.log(ourMainGoals);
  let teamMembers = [];
  if (dataContent !== null) {
    teamMembers = dataContent[2].contentCol
  }
  // console.log(teamMembers);

  let customerReviews = [];
  if (dataContent !== null) {
    customerReviews = dataContent[3].contentQuote
  }
  return (
    <div>
      <BreadcrumbPath pathname={'About Us'} />
      <div className='max-w-[1200px] m-auto py-[65px] px-[0px]'>
        <ContentTop contentTop={contentTop} />
      </div>
      <div className='bg-[#F7F7F7]'>
        <div className='max-w-[1200px] m-auto py-[65px] px-[0px] '>
          <OurMainGoals ourMainGoals={ourMainGoals} />
        </div>
      </div>
      <div className='max-w-[1200px] m-auto py-[65px] px-[0px]'>
        <TeamMembers teamMembers={teamMembers} />
      </div>
      <div className='bg-[#F7F7F7]'>
        <div className='max-w-[1200px] m-auto py-[65px] px-[0px] '>
          <CustomerReviews customerReviews={customerReviews} />
        </div>
      </div>
      <div className='max-w-[1200px] m-auto py-[65px] px-[0px]'>
        <LatestNew />
      </div>
      <SliderForm />
    </div>
  )
}

export default About