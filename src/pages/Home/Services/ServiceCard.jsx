import React from "react";

// { icon: Icon, title, description }
const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-2xl">
      <div className="card-body items-center text-center">
        <div className="text-4xl text-primary mb-3">
          <Icon />
        </div>
        <h3 className="card-title text-lg font-semibold text-primary">{title}</h3>
        <p className="text-white-700 text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
