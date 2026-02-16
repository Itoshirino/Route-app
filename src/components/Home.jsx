import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieList from "./MoviesList";
import "../App.css";

const Home = () => {
  const [name, setName] = useState("shrek");
  const [data, setData] = useState([]);
  const api = `https://www.omdbapi.com/?s=shrek&apikey=c65fcde9`;

  //Getapi
  useEffect(() => {
    axios.get(api).then((data) => {
      setData(data?.data?.Search);
    });
  }, [api]);
  //handleInput
  const handleName = (e) => {
    setName(e.target.value);
  };

  //handleSearch
  const handleSearch = (name) => {
    axios
      .get(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((data) => {
        setData(data?.data?.Search);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "500px", margin: "auto", display: "block" }}
          type="search"
          placeholder="Search for movies..."
          value={name}
          onChange={handleName}
        />
      </form>
      <MovieList data={data} />
    </div>
  );
};

export default Home;
