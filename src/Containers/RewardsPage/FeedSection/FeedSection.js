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
  const [value, setValue] = React.useState(0);
  const [dataState, dataDispatch] = React.useReducer(reducer, []);

  const sortedData = dataState.sort((a, b) => b.createDate - a.createDate);

  React.useEffect(() => {
    setLoading(true);
    rewards
      .getAllRewards()
      .then((response) => {
        if (
          response.status &&
          response.status === 200 &&
          Array.isArray(response.data)
        ) {
          const processedData = response.data.map(processDataEntry);
          dataDispatch(actions.setData(processedData));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FeedSectionContext.Provider value={{ dataDispatch }}>
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
          {loading ? (
            <Box className="flex flex-grow items-center justify-center feed-section__rewards-list-background">
              <CircularProgress />
            </Box>
          ) : (
            <Fade in={!loading} timeout={1000}>
              <div>
                <TabPanel
                  value={value}
                  index={0}
                  className="flex flex-col flex-grow"
                >
                  <RewardsList data={sortedData} />
                </TabPanel>
                <TabPanel
                  value={value}
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
