import React from "react";
import Avatar from "@mui/material/Avatar";

const MOCK_URL = "https://robohash.org/quosiurenon.png?size=50x50&set=set1";

function UserAvatar(props) {
  const currentUserSrc = MOCK_URL; // Fallback value. We assume if src is not passed in props, we show current user avatar
  return <Avatar src={currentUserSrc} {...props} />;
}

export default UserAvatar;
