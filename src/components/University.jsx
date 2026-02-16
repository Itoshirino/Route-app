import React from "react";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import UniversityList from "./UniversityList";

const University = () => {
  const [country, setCountry] = useState("United Kingdom");
  const [data, setData] = useState([]);
  const api = "http://universities.hipolabs.com/search?name=middle";
  const key = "2f8f4d89-b15ac680-b4bc7b7e-ed2dd23c";

  //Getapi
  useEffect(() => {
    axios.get(api).then((data) => {
      setData(data?.data);
    });
  }, [api]);

  //handleInput
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  //handleSearch
  const handleSearch = (country) => {
    axios
      .get(
        `http://universities.hipolabs.com/search?country=${country}`, // 
      )
      .then((data) => {
        setData(data?.data);
      });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(country);
  };

  return (
    <div className="wrapper">
      <div className="wrapper__box">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter University name"
            className="search"
            value={country}
            onChange={handleCountry}
          />
        </form>
        <UniversityList data={data} />
      </div>
    </div>
  );
};

export default University;
