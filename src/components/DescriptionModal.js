import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import "../css/descriptionmodal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modal";

function DescriptionModal() {
  const { isOpen } = useSelector((state) => state.modal);
  const { selectedItem } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={() => dispatch(openModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            width: "90%",
            backgroundColor: "white",
            borderRadius: ".25rem",
            boxShadow: 24,
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
              height: "16rem",
            }}
          >
            {selectedItem && selectedItem.exer.image !== null ? (
              <img src={selectedItem.exer.image} alt="" className="modal-image" />
            ) : (
              <img
                src={require("../images/placeholderthumb.png")}
                alt=""
                className="modal-image"
              />
            )}
          </Box>
          <Box className="modal-description">
            {selectedItem !== null ? (
              <>
                <Typography
                  id="modal-modal-title"
                  variant="2"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {selectedItem.exer.name}
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
                  {selectedItem.exer.description}
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
                  {selectedItem.exer.usedFor.map((use) => (
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
            <Button variant="contained" onClick={() => dispatch(openModal())}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default DescriptionModal;
