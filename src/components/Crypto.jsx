import React, { useState, useEffect } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Crypto = () => {
  const MARKET_API =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";

  const [prices, setPrices] = useState({
    bitcoin: { usd: 0 },
    ethereum: { usd: 0 },
    tether: { usd: 0 },
    binancecoin: { usd: 0 },
  });

  const [loading, setLoading] = useState(true);

  const fetchPrices = () => {
    axios
      .get(MARKET_API)
      .then((data) => {
        setPrices(data?.data);
        setLoading(false);
      })
      .catch(() => {
        Toastify({
          text: "Failed",
          duration: 4000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ff4757",
        }).showToast();
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPrices(); 

    const interval = setInterval(() => {
      fetchPrices();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="wrapper2">
        <div className="card13">
          <div className="CryptoPlus__top">
            <h1 className="CryptoPlus__title">Umumiy Profil to‘lamasi</h1>
            <h1 className="CryptoPlus__price">$0.00</h1>

            <h2 className="CryptoPlus__description">Live Market</h2>
            <h3 className="CryptoPlus__subdescription">
              <i className="ri-global-line"></i> Online
            </h3>
          </div>

          <div className="CryptoPlus__market">
            <h1>
              <i className="ri-hand-coin-line"></i> Crypto Market
            </h1>
            {loading ? (
              <h1 className="Loading">
                Loading <span>.</span>
                <span>.</span>
                <span>.</span>
              </h1>
            ) : (
              <div className="cryptoList">
                <div className="market__box">
                  <p className="market__title">
                    <i className="ri-eth-line"></i> ETH/USD
                  </p>
                  <p className="market__money">${prices.ethereum.usd}</p>
                </div>
                <div className="market__box">
                  <p className="market__title">
                    <i className="ri-btc-fill"></i> BTC/USD
                  </p>
                  <p className="market__money">${prices.bitcoin.usd}</p>
                </div>
                <div className="market__box">
                  <p className="market__title">
                    <i className="ri-bnb-line"></i> USDT/USD
                  </p>
                  <p className="market__money">${prices.tether.usd}</p>
                </div>
                <div className="market__box">
                  <p className="market__title">
                    <i className="ri-nft-line"></i> BNB/USD
                  </p>
                  <p className="market__money">${prices.binancecoin.usd}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
