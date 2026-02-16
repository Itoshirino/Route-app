import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: "20px",
          }}
        >
          <li>
            <NavLink to="/">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/university">University-finder</NavLink>
          </li>
          <li>
            <NavLink to="/fortnite">Fortnite-Shop</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/random-users">Random-Users</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/crypto">CryptoPlus</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
