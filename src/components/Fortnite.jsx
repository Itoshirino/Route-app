import React, { useState, useEffect } from "react";
import axios from "axios";
import FortniteList from "./FortniteList";

const Fortnite = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "https://fortniteapi.io/v2/shop?lang=en";
  const key = "2f8f4d89-b15ac680-b4bc7b7e-ed2dd23c";

  useEffect(() => {
    axios
      .get(api, {
        headers: { Authorization: key },
      })
      .then((res) => {
        setData(res.data.shop || []);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = data.filter((item) =>
    (item.displayName || "").toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div id="top" className="main">
      <div className="card-content">
        <div className="cards23">
          <h1>Fortnite Shop</h1>

          <a href="#top" className="link2">
            Go Top
          </a>

          <form>
            <input
              type="text"
              className="search"
              placeholder="Search toy..."
              value={search}
              onChange={handleChange}
            />
          </form>

          {loading ? (
            <h1 className="Loading">
              Loading <span>.</span> <span>.</span> <span>.</span>
            </h1>
          ) : (
            <>
              <FortniteList data={filtered} />
              <a href="#bottom" className="link">
                Bottom
              </a>
            </>
          )}

          <div className="cards"></div>
        </div>
      </div>

      <div id="bottom" className="pagination"></div>
    </div>
  );
};

export default Fortnite;