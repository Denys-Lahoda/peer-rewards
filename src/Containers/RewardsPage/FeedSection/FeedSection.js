import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { format } from "date-fns";

import "./styles.css";
import MOCK_DATA from "./MOCK_DATA.json";

import RewardsList from "./RewardsList/RewardsList";
import SendReward from "./SendReward/SendReward";
import { TabPanel } from "../../../Components";

const processDataEntry = (dataEntry) => ({
  ...dataEntry,
  formattedDate: format(new Date(+dataEntry.createDate), "MMM d, yyyy"),
});

function FeedSection() {
  const currentUserId = "000001"; // Hardcoded value for demo. Related to value in MOCK_DATA
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Promise.resolve({ data: MOCK_DATA }).then(({ data: fetchedData }) => {
      const processedData = fetchedData.map(processDataEntry);
      setData(processedData);
    });
  }, []);

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
      <div className="flex flex-col flex-grow">
        <TabPanel value={value} index={0} className="flex flex-col flex-grow">
          <RewardsList data={data} />
        </TabPanel>
        <TabPanel value={value} index={1} className="flex flex-col flex-grow">
          <RewardsList
            data={data.filter(({ userId }) => userId === currentUserId)}
          />
        </TabPanel>
      </div>
    </div>
  );
}

export default FeedSection;
