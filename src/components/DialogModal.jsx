import React from "react";
import { Box, useTheme, Modal } from "@mui/material";

const DialogModal = ({ open, setOpen, children }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          height: "auto",
          width: "auto",
          minWidth: { xs: "90%", sm: "50%", md: "40%", xl: "30%" },
          maxWidth: { xs: "90%", lg: "30%" },
          maxHeight: "80vh",
          padding: { xs: "1rem", md: "2rem 4rem"},
          overflow: "hidden",
          backgroundColor: "white",
          borderRadius: ".25rem",
          boxShadow: 24,
          color: theme.palette.text.primary,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default DialogModal;
