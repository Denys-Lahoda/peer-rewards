import React from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";

import { UserAvatar } from "../../../../../Components";

function RewardItem({
  userAvatarUrl,
  userFullName,
  senderFullName,
  formattedDate,
  message,
}) {
  return (
    <div className="reward-item">
      <div>
        <UserAvatar src={userAvatarUrl} />
      </div>
      <div className="reward-item__right-part">
        <Typography
          sx={{ fontSize: 14 }}
        >{`${userFullName} rewarded by ${senderFullName}`}</Typography>
        <Typography sx={{ lineHeight: 1, fontSize: 12 }}>
          {formattedDate}
        </Typography>
        <Typography>{message}</Typography>
      </div>
    </div>
  );
}

export default React.memo(RewardItem);
