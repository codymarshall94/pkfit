import React from "react";
import { Box, Typography, Modal } from "@mui/material";

const DescriptionModal = ({ children, isShowing, hide }) => {

  return (
    <Modal
      open={isShowing}
      onClose={hide}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default DescriptionModal;
