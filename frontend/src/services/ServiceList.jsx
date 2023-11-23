import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Great of makin decisions with regard to weather"
    },

    {
     imgUrl: guideImg,
     title: "Best tour guide",
     desc: "Provides best tour guide services to all.",
    },

    {
     imgUrl: customizationImg,
     title: "customization",
     desc: "weather customization",
    },
]

const ServiceList = () => {
  return (
  <>
      {
        servicesData.map((item, index) => (
            <Col lg='3' md='3' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item}/> 
            </Col>
        ))}
    </>
  );
  
};

export default ServiceList
