import makeRequest from "../makeRequest";
import MOCK_DATA from "./MOCK_DATA.json";

const getAllRewards = () => makeRequest({ data: MOCK_DATA });

const MOCK_ENTRY = {
  userAvatarUrl:
    "https://robohash.org/delectusundesequi.png?size=50x50&set=set1",
  senderId: "000001",
  senderFullName: "Jane Doe",
};

const sendReward = (data) => {
  // Since it's dummy api, we generate required fields
  const id = Math.random().toString(36).substr(2, 9);
  const userId = Math.random().toString(36).substr(2, 9);
  const createDate = new Date().valueOf();

  return makeRequest({
    data: { ...MOCK_ENTRY, ...data, id, userId, createDate },
  });
};

export { getAllRewards, sendReward };
