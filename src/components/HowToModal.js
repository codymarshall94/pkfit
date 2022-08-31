import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import "../css/howtomodal.css";

function HowToModal({ openHowTo, handleOpenHowTo }) {
  return (
    <Box sx={{ bgColor: "white" }}>
      <Modal
        open={openHowTo}
        onClose={() => handleOpenHowTo()}
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
            maxHeight: "100vh",
            overflow: "hidden",
            width: { xs: "90%", lg: "40%", xl: "20%" },
            bgcolor: "white",
            border: "0.025rem solid #000",
            boxShadow: 24,
            p: {xs: 2, lg: 4},
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            How to use
          </Typography>
          <CloseIcon
            sx={{ position: "absolute", top: ".75rem", right: ".75rem" }}
            onClick={() => handleOpenHowTo()}
          />
          <Box sx={{ borderBottom: "0.025rem solid #D3D6DA", p: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{fontSize: {xs: "1rem"}}}
            >
              Select your preferred options of the <b>3 categories</b>.
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{fontSize: {xs: "1rem"}}}
            >
              Once all options are selected. Click <b>generate</b> and your
              workout will show below.
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{fontSize: {xs: "1rem"}}}
            >
              You may hit <b>generate</b> to regenerate the workout
            </Typography>
          </Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontSize: "1rem", fontWeight: "bold", margin: ".5rem 0", textAlign: "center" }}
          >
            Options
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Upper</b> - Push and pull movements
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Lower</b> - Jump, balance and tendon strengthening exercises
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Full</b> - Combination of both upper and lower
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>5 or 10</b> - Amount of exercises you want to preform, generally{" "}
            <b>5-15 minutes</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Power</b> - Movements you will train with alot of speed or force
            applied
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Strength</b> - Heavier movements overcoming resistance and
            increasing muscle density
          </Typography>
          <Typography id="modal-modal-description" sx={{ p: "0.25rem 0" }}>
            <b>Conditioning</b> - Movements to improve endurance, increase
            flexibility and strengthen ligaments
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default HowToModal;
