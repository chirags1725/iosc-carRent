import React from "react";
import brandData from "../Data/rent_brands.json";
import bodyData from "../Data/rent_body.json";

const Rent = () => {
  return (
    <div className="rent-box">
      <div className="rent-heading">
        <h2>Rent by Brands</h2>
        <h4>View all &#8594;</h4>
      </div>
      <div className="car-rent-box" style={{ justifyContent: "center" }}>
        {brandData.map((item, index) => (
          <div key={index} className="car-box">
            <h3>{item.brand}</h3>
            <div dangerouslySetInnerHTML={{ __html: item.svg }} />
          </div>
        ))}
      </div>

      <div className="rent-heading" style={{ marginTop: "60px" }}>
        <h2>Rent by Body Type</h2>
        <h4>View all &#8594;</h4>
      </div>
      <div className="car-rent-box" style={{ justifyContent: "center" }}>
        {bodyData.map((item, index) => (
          <div key={index} className="car-box">
            <h3>{item.type}</h3>
            <div dangerouslySetInnerHTML={{ __html: item.svg }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
