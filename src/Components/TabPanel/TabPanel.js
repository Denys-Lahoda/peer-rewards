import React from "react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div hidden={value !== index} {...other}>
      {children}
    </div>
  );
}

export default TabPanel;
