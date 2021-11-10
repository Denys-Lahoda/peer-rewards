import React from "react";
import "./styles.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";

import SendRewardForm from "./SendRewardForm/SendRewardForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: [320, 400],
  bgcolor: "background.paper",
  boxShadow: 12,
  p: 4,
};

function SendReward() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton className="send-reward-button" onClick={handleOpen}>
        <AddIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <SendRewardForm />
        </Paper>
      </Modal>
    </>
  );
}

export default SendReward;
