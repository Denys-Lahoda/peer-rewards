import React from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";

import { UserAvatar, UserFullName } from "../../../Components";

function UserSection() {
  const myRewardsValue = 250;
  const giveValue = 100;

  return (
    <div className="user-section">
      <div className="user-section__user-info">
        <UserAvatar sx={{ height: 100, width: 100, mb: 0.5 }} />
        <UserFullName sx={{ fontWeight: "bold" }} />
      </div>
      <div className="user-section__value-block">
        <Typography className="user-section__value-block__label">
          My Rewards
        </Typography>
        <Typography className="user-section__value-block__value">
          ${myRewardsValue}
        </Typography>
      </div>
      <div className="user-section__value-block">
        <Typography className="user-section__value-block__label">
          Give
        </Typography>
        <Typography className="user-section__value-block__value">
          ${giveValue}
        </Typography>
      </div>
    </div>
  );
}

export default UserSection;
