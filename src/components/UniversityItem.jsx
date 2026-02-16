import React from "react";
import "../App.css";
import "remixicon/fonts/remixicon.css";

const UniversityItem = ({ name, data, country, alpha_two_code, domains }) => {
  return (
    <div className="card2">
      <p>
        <i className="ri-school-fill icon"></i>
      </p>
      <h2 className="name">{name}</h2>
      <p className="country">
        <strong>Country:</strong> {country}
      </p>
      <p className="code">
        <strong>Code:</strong> {alpha_two_code}
      </p>
      <p className="domain">
        <strong>Domain:</strong> {domains}
      </p>
    </div>
  );
};

export default UniversityItem;
