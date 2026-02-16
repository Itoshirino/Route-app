import React from "react";

const FortniteItem = ({ item }) => {
  const img = item.displayAssets?.[0]?.full_background || "";

  return (
    <div className="card">
      <img width="200" height="200" src={img} alt={item.displayName} />
      <h2>{item.displayName}</h2>
      <p>{item.displayDescription}</p>
      <p>
        <i style={{ color: "green" }} className="ri-money-dollar-box-fill"></i>{" "}
        {item.price?.finalPrice} V-Bucks
      </p>
    </div>
  );
};

export default FortniteItem;
