import React from "react";
import "./styles.css";
import Pagination from "@mui/material/Pagination";

import RewardItem from "./RewardItem/RewardItem";

const PAGE_SIZE = 10;

function RewardsList({ data }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const sliceIndex = (page - 1) * 10;
  
  return (
    <div className="reward-list">
      {Array.isArray(data) &&
        data
          .slice(sliceIndex, page * PAGE_SIZE)
          .map((entry) => <RewardItem key={entry.id} {...entry} />)}
      <Pagination
        count={Math.ceil(data.length / PAGE_SIZE)}
        variant="outlined"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

export default RewardsList;
