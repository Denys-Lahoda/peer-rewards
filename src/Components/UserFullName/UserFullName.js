import React from "react";
import Typography from "@mui/material/Typography";

const MOCK_NAME = "Jane Doe";

function UserFullName(props) {
  const fullName = MOCK_NAME; // Fallback value. We assume if fullName is not passed in props, we show current user full name

  return <Typography {...props}>{props.fullName || fullName}</Typography>;
}

export default UserFullName;
