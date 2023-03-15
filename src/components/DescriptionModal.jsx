import React from "react";
import { Box, Typography, Modal, Chip, Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

function DescriptionModal({ isOpen, handleClose}) {
  const { selectedItem } = useSelector((state) => state.modal);
  const theme = useTheme();

  return (
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            width: "auto",
            minWidth: { xs: "90%", sm: "60", md: "60%", lg: "50%", xl: "30%"},
            maxWidth: {xs: "90%", lg: "30%"},
            maxHeight: "80vh",
            overflow: "hidden",
            backgroundColor: theme.palette.background.primary,
            borderRadius: ".25rem",
            boxShadow: 24,
            padding: "1rem",
            color: theme.palette.text.primary,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
              height: {xs: "8rem", lg: "16rem"},
            }}
          >
            {selectedItem && selectedItem.image !== null ? (
              <img src={selectedItem.image} alt="" className="modal-image" />
            ) : (
              <img
                src={require("../images/placeholderimg.jpg")}
                alt=""
                className="modal-image"
              />
            )}
          </Box>
          <Box>
            {selectedItem !== null ? (
              <>
                <Typography
                  id="modal-modal-title"
                  variant="2"
                  component="h2"
                  sx={{
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  {selectedItem.name}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  Instructions
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {selectedItem.description}
                </Typography>
                <Box>
                  <Typography
                    id="modal-modal-description"
                    variant="h6"
                    component="h2"
                    sx={{ mt: 2, fontWeight: "bold" }}
                  >
                    Great For
                  </Typography>
                  {selectedItem.usedFor.map((use) => (
                    <Chip label={use} key={use} />
                  ))}
                </Box>
              </>
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}
          >
            <Button variant="contained" onClick={() => handleClose()}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
  );
}

export default DescriptionModal;
