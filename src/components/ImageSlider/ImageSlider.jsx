import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./assets/css/imageSlider.css";

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
      >
        <div className="image-slider-container">
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            Image Slider
          </Typography>
          <div className="image-slider-wrapper">
            <Button
              onClick={previousImage}
              variant="contained"
              className="arrowButton"
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <FaArrowLeft />
            </Button>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="image-slider-image"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                transition: "opacity 0.5s",
              }}
            />
            <Button
              onClick={nextImage}
              variant="contained"
              className="arrowButton"
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <FaArrowRight />
            </Button>
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={handleClose}
              variant="contained"
              className="closeBTN"
              size="small"
              sx={{ margin: "0 10px", background: "red" }}
            >
              Close
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`dot ${currentImageIndex === index ? "active" : ""}`}
              />
            ))}
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ImageSlider;
