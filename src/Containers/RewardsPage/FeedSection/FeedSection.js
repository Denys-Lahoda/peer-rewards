import React from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";

import RewardsList from "./RewardsList/RewardsList";
import SendReward from "./SendReward/SendReward";
import { TabPanel } from "../../../Components";
import { rewards } from "../../../api";
import { reducer, actions } from "./dataReducer";
import processDataEntry from "./utils/processDataEntry";

const FeedSectionContext = React.createContext();

function FeedSection() {
  const currentUserId = "000001"; // Hardcoded value for demo. Related to value in MOCK_DATA
  const [loading, setLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  // Reward items reducer. Array. Maybe it's overkill to write reducer for test assigment. I just wanted to show how I would solve task if it's real world task.
  const [dataState, dataDispatch] = React.useReducer(reducer, []);

  const sortedData = dataState.sort((a, b) => b.createDate - a.createDate); // Sort by createDate, descending

  React.useEffect(() => {
    setLoading(true);
    // Dummy rest API, just to simulate things
    rewards
      .getAllRewards()
      .then((response) => {
        if (
          response.status &&
          response.status === 200 &&
          Array.isArray(response.data)
        ) {
          const processedData = response.data.map(processDataEntry); // Add formattedDate
          dataDispatch(actions.setData(processedData));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <FeedSectionContext.Provider value={{ dataDispatch }}>
      <div className="feed-section">
        <Box
          className="feed-section__tabs"
          sx={{ borderBottom: 1, borderBottomColor: "divider" }}
        >
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab label="Feed" />
            <Tab label="My Rewards" />
          </Tabs>
          <div className="feed-section__divider-button-wrapper">
            <SendReward />
          </div>
        </Box>
        <div className="flex flex-col flex-grow">
          {loading ? (
            <Box className="flex flex-grow items-center justify-center feed-section__rewards-list-background">
              <CircularProgress />
            </Box>
          ) : (
            <Fade in={!loading} timeout={1000}>
              <div>
                <TabPanel
                  value={activeTab}
                  index={0}
                  className="flex flex-col flex-grow"
                >
                  <RewardsList data={sortedData} />
                </TabPanel>
                <TabPanel
                  value={activeTab}
                  index={1}
                  className="flex flex-col flex-grow"
                >
                  <RewardsList
                    data={sortedData.filter(
                      ({ userId }) => userId === currentUserId
                    )}
                  />
                </TabPanel>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </FeedSectionContext.Provider>
  );
}

export default FeedSection;
export { FeedSectionContext };
