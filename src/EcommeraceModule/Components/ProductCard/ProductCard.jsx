import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Box, Typography } from "@mui/material";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";
import prodcompare from "../../StoreAssets/img/prodcompare.svg";
import addcart from "../../StoreAssets/img/add-cart.svg";
import wish from "../../StoreAssets/img/wish.svg";
import wishblack from "../../StoreAssets/img/wishblack.svg";
import view from "../../StoreAssets/img/view.svg";

const ProductCard = ({
  image,
  imageonHover,
  heading,
  price,
  subHeading,
  stars,
  width,
  height
}) => {
  const [img, setImg] = useState(image);
  const [wishIcon, setWishIcon] = useState(wish);
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        height: height || "390px",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        justifyItems: "center",
        textAlign:"left"
      }}
      onMouseEnter={() => {
        setImg(imageonHover);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setImg(image);
        setHovered(false);
      }}
    >
      {/* Top-Right Icons */}
      <Box
        sx={{
          top: "10px",
          right: "10px",
          display: "flex",
          position: "absolute",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            "&:hover": {
              backgroundColor: C.colorFeaturedCollectionButtonHover,
            },
            p: "0.4rem",
            display: "flex",
            borderRadius: "50%", // Fully round
            alignItems: "center", // Center vertically
            width: "fit-content", // Adjust as needed for size
            height: "fit-content", // Adjust to match width for a perfect circle
            justifyContent: "center", // Center horizontally
            transition: "background-color 0.5s ease-in-out",
            // marginBottom: "3px",
          }}
          onClick={() => setWishIcon(wishIcon === wish ? wishblack : wish)}
        >
          <img src={wishIcon} alt="Wishlist" style={{ width: "16px" }} />
        </Box>

        <Box
          sx={{
            // gap: "8px",
            display: "flex",
            flexDirection: "column",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              p: "0.4rem",
              display: "flex",
              borderRadius: "50%", // Fully round
              alignItems: "center", // Center vertically
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              justifyContent: "center", // Center horizontally
              transition: "background-color 0.5s ease-in-out",
            }}
          >
            <img src={prodcompare} alt="Compare" style={{ width: "16px" }} />
          </Box>

          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "50%", // Fully round
              p: "0.4rem",
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <img src={view} alt="View" style={{ width: "16px" }} />
          </Box>
          <Box
            sx={{
              "&:hover": {
                backgroundColor: C.colorFeaturedCollectionButtonHover,
              },
              transition: "background-color 0.5s ease-in-out",
              borderRadius: "50%", // Fully round
              p: "0.4rem",
              width: "fit-content", // Adjust as needed for size
              height: "fit-content", // Adjust to match width for a perfect circle
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <img src={addcart} alt="Add to Cart" style={{ width: "16px" }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{}}>
        <img
          src={img}
          alt="Product"
          style={{
            width: width || "250px",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Box sx={{ textAlign: "left", padding: "10px 30px",width:"100%" }}>
        <Typography
          sx={{ color: C.colorFeaturedCollectionSubHeading, fontSize: "12px" }}
        >
          {subHeading}
        </Typography>
        <Typography
          sx={{ color: C.colorFeaturedCollectionHeading, fontWeight: "550" }}
        >
          {heading}
        </Typography>
        <ReactStars
          count={5}
          value={stars || 4}
          size={24}
          edit={false}
          activeColor="#ffd700"
        />
        <Typography sx={{ fontWeight: "550", marginTop: "10px" }}>
          {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
