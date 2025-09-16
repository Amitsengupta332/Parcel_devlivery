import React from "react";

// { icon: Icon, title, description }
const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div
      className="card bg-base-100 shadow-lg rounded-2xl transition 
                hover:shadow-xl hover:bg-[#CAEB66] cursor-pointer group">
      <div className="card-body items-center text-center">
        <div className="text-4xl text-primary mb-3 group-hover:text-black">
          <Icon />
        </div>
        <h3 className="card-title text-lg font-semibold group-hover:text-black">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
