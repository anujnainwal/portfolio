import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import "./assets/css/imageSlider.css"; // Import your custom CSS file

const ImageSlider = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen} className="imageButton">
        Images
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-slider-modal"
        aria-describedby="image-slider-modal-description"
        BackdropProps={{ invisible: false }} // Ensure backdrop is not invisible
      >
        <div className="image-slider-container">
          <img
            src={images[currentImageIndex]}
            alt="Slider"
            className="image-slider-image"
            width="60%"
          />
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={previousImage}
              variant="contained"
              className="previousBTN"
              sx={{ margin: "0 10px" }}
              size="small">
              Previous
            </Button>

            <Button
              onClick={nextImage}
              variant="contained"
              className="nextBTN"
              size="small"
              sx={{ margin: "0 10px 0px 0px" }}>
              Next
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              className="nextBTN"
              size="small"
              sx={{ background: "red" }}>
              Close
            </Button>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ImageSlider;
