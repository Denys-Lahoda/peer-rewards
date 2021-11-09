import React from "react";
import "./styles.css";

import UserSection from "./UserSection/UserSection";
import FeedSection from "./FeedSection/FeedSection";

function RewardsPage() {
  return (
    <div className="rewards-page">
      <UserSection />
      <FeedSection />
    </div>
  );
}

export default RewardsPage;
