import React from "react";
import "./styles.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import SendRewardForm from "./SendRewardForm/SendRewardForm";

const paper_style = {
  width: [320, 400],
  bgcolor: "background.paper",
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
        <Fade in={open}>
          <Paper className="send-reward__paper" sx={paper_style}>
            <SendRewardForm handleClose={handleClose} />
          </Paper>
        </Fade>
      </Modal>
    </>
  );
}

export default SendReward;
