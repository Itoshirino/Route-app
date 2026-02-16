import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomUsers = () => {
  const api = "https://randomuser.me/api/?results=20";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState({});

  const findNewUsers = async () => {
    if (isFirstLoad) setLoading(true);

    try {
      const response = await axios.get(api);
      const newUsers = response.data.results || [];

      setUsers((prev) => [...prev, ...newUsers]);

      if (isFirstLoad) {
        setIsFirstLoad(false);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    findNewUsers();

    const interval = setInterval(() => {
      findNewUsers();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container3">
      {loading ? (
        <h1 className="Loading">
          Loading <span>.</span> <span>.</span> <span>.</span>
        </h1>
      ) : (
        <div className="file">
          <div className="results">
            {users.map((user, index) => (
              <div key={`${user.login.uuid}-${index}`} className="container">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="result"
                />
                <div className="box">
                  <p className="names">
                    {user.name.first} {user.name.last}
                  </p>
                  <p className="email">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomUsers;
