import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import ProductImageZoom from "../../Components/ProductPageComponents/ProductImageZoom/ProductImageZoom";
import ProductInformation from "../../Components/ProductPageComponents/ProductInformation/ProductInformation";
import FAQAccordion from "../../Components/FAQAccordion/FAQAccordion";
import ProductDescription from "../../Components/ProductPageComponents/ProductDescription/ProductDescription";
import ProductFeedback from "../../Components/ProductPageComponents/ProductFeedback/ProductFeedback";
import FeaturedCollectionComponent from "../../pagesMine/FeaturedCollection/FeaturedCollectionComponent";

const ProductPageContainer = ({ products }) => {
  const parentRef = useRef(null);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current || !stickyRef.current) return;

      const parentRect = parentRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();

      // Check if the parent container has scrolled past the top of the viewport
      const isParentScrolled = parentRect.top <= 0;

      // If the bottom of the parent reaches the top of the viewport
      const isParentBottomReached = parentRect.bottom <= 0;

      // Set sticky behavior: keep the sticky component fixed until the parent is about to leave the viewport
      if (isParentScrolled && !isParentBottomReached) {
        setIsSticky(true); // Keep the sticky component at the top while parent is in view
      } else {
        setIsSticky(false); // Let the sticky component scroll out with the parent when parent leaves
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          ref={parentRef}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            //   height: "100vh", // Extra height for scrolling
          }}
        >
          <ProductImageZoom images={products.Images} />

          <Box
            ref={stickyRef}
            sx={{
              top: "0",
              width: "100%",
              height: "100px",
              display: "flex",
              flexBasis: "55%",
              marginBottom: "385px",
              position: isSticky ? "sticky" : "relative",
              // backgroundColor: "#ff6b6b",
              // color: "white",
              // alignItems: "center",
              // justifyContent: "center",
              // top: isSticky ? "0" : "0",
            }}
          >
            <ProductInformation products={products} />
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} sx={{ gap: 2 }}>
        <Box display={"block"} sx={{ flexBasis: "75%" }}>
          <ProductDescription description={"heheh"} />
          <ProductFeedback feedback={products.Feedback} />
        </Box>
        <FAQAccordion />
      </Box>
      <Box>
        <FeaturedCollectionComponent />
      </Box>
    </>
  );
};

export default ProductPageContainer;
