import React from 'react';
import { services } from './../../assets/data/services';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  // Slice the services array to only include the first 3 items
  const firstThreeServices = services.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {firstThreeServices.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
      <Link to="/services">
        <button className="btn">View more</button>
      </Link>
    </div>
  );
};

export default ServicesList;
