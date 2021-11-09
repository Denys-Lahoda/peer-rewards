import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./styles.css";
import MOCK_DATA from "./MOCK_DATA.json";

import RewardItem from "./RewardItem/RewardItem";
import SendReward from "./SendReward/SendReward";
import { TabPanel } from "../../../Components";

function FeedSection() {
  const data = React.useMemo(
    () =>
      Array.isArray(MOCK_DATA)
        ? MOCK_DATA.sort(
            (a, b) => new Date(+b.createDate) - new Date(+a.createDate)
          )
        : [],
    [MOCK_DATA]
  );

  const currentUserId = "000001"; // Hardcoded value for demo. Related to value in MOCK_DATA
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="feed-section">
      <Box
        className="feed-section__tabs"
        sx={{ borderBottom: 1, borderBottomColor: "divider" }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Feed" />
          <Tab label="My Rewards" />
        </Tabs>
        <div className="feed-section__divider-button-wrapper">
          <SendReward />
        </div>
      </Box>
      <div>
        <TabPanel value={value} index={0}>
          <div className="feed-section__reward-list">
            {data.map((entry) => (
              <RewardItem key={entry.id} {...entry} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="feed-section__reward-list">
            {data
              .filter((entry) => entry.userId === currentUserId)
              .map((entry) => (
                <RewardItem key={entry.id} {...entry} />
              ))}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default FeedSection;
