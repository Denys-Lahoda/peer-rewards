import React from "react";
import Typography from "@mui/material/Typography";

const MOCK_NAME = "Jane Doe";

function UserFullName(props) {
  const fullName = MOCK_NAME;

  return <Typography {...props}>{fullName}</Typography>;
}

export default UserFullName;
