import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { Box, Grid2 as Grid } from "@mui/material";

const ProductImageZoom = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]); // Main Image
  const [thumbnails, setThumbnails] = useState(images.slice(1)); // Thumbnails (3 images)

  const handleImageChange = (clickedImage, index) => {
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = mainImage; // Swap clicked image with main image
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  return (
    <Box display="block" gap={3} m={5}>
      {/* Main Image with Zoom */}
      <Box sx={{ width: "400px", height: "400px", overflow: "hidden" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: mainImage, // Main image (Zoomable)
            },
            largeImage: {
              src: mainImage, // High-resolution image
              width: 1200,
              height: 1200,
            },
            enlargedImagePosition: "over",
            enlargedImageStyle: { zIndex: 10 },
            isHintEnabled: true,
          }}
        />
      </Box>

      {/* Thumbnail Images (No Zoom) */}
      <Box mt={2}>
        <Grid container spacing={1}>
          {thumbnails.map((image, index) => (
            <Grid item key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleImageChange(image, index)} // Swap without full re-render
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductImageZoom;


{
  /* <Grid container>
  {images.map((value,index) => (
    <Grid item key={index}>
        <img src={value} alt="" style={{width:"200px",height:"200px"}}/>
    </Grid>
  ))}
</Grid> */
}
