import Home from "./components/Home";
import University from "./components/University";
import Fortnite from "./components/Fortnite";
import RandomUsers from "./components/RandomUsers";
import Crypto from "./components/Crypto";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<University />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/random-users" element={<RandomUsers />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
