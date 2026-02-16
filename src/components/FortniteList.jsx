import React, { useState } from "react";
import FortniteItem from "./FortniteItem";

const FortniteList = ({ data }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  const goToPage = (num) => {
    if (num >= 1 && num <= totalPages) setPage(num);
  };

  return (
    <>
      <div className="cards3">
        {currentItems.map((item, i) => (
          <FortniteItem key={i} item={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={page === num ? "active" : ""}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default FortniteList;