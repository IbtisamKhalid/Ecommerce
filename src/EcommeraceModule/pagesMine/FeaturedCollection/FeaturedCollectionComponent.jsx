import React from "react";
import { Typography, Box, Grid2 as Grid, IconButton } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";
import camera from "../../StoreAssets/img/camers.jpg";
import headphone from "../../StoreAssets/img/headphone1.jpg";
import speaker from "../../StoreAssets/img/speaker.jpg";
import tab from "../../StoreAssets/images/tab.jpg";
import watch from "../../StoreAssets/images/watch.jpg";
import cameraHovered from "../../StoreAssets/img/CameraHovered.jpg";
import headphonehover from "../../StoreAssets/img/headphonehover.jpg";
import speakerhover from "../../StoreAssets/img/speakerhover.jpg";
import tabhover from "../../StoreAssets/images/tab1.jpg";
import watchhover from "../../StoreAssets/img/watchhovered.jpg";
import { ColorsEcommrace as C } from "../../Theme/EcommeraceTheme";
import RefreshIcon from "@mui/icons-material/Refresh";

function FeaturedCollectionComponent() {
  
  const [count, setCount] = React.useState(0)

  const products = [
    {
      id: 1,
      image: camera,
      heading: "Olympus pen, EZ lens",
      subHeading: "Sony",
      stars: 5,
      price: "$200",
      imageonHover: cameraHovered,
    },
    {
      id: 2,
      image: headphone,
      heading: "Headphones from Havells",
      subHeading: "Havells",
      stars: 5,
      price: "$200",
      imageonHover: headphonehover,
    },
    {
      id: 3,
      image: speaker,
      heading: "Portable Speakers",
      subHeading: "Bajaj",
      stars: 5,
      price: "$200",
      imageonHover: speakerhover,
    },
    {
      id: 4,
      image: tab,
      heading: "Havells",
      subHeading: "Tab from Havells",
      stars: 5,
      price: "$200",
      imageonHover: tabhover,
    },
    {
      id: 5,
      image: watch,
      heading: "Watch from Sony",
      subHeading: "Sony",
      stars: 5,
      price: "$200",
      imageonHover: watchhover,
    },
  ];

  // Toggle products order
  const displayedProducts = count ? [...products].reverse() : products;

  return (
    <section
      className="feature-wrapper py-5 home-wrapper-2"
      style={{ borderRadius: "10px", margin: "0 1rem" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2rem 0 2rem 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "550",
            color: C.colorFeaturedCollectionHeading,
            fontSize: "28px",
          }}
        >
          Featured Collection
        </Typography>
        <IconButton
          onClick={() => setCount((prev) => !prev)}
          sx={{ color: C.colorFeaturedCollectionHeading }}
        >
          <RefreshIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} size={2.4}>
            <ProductCard
              image={product.image}
              heading={product.heading}
              subHeading={product.subHeading}
              stars={product.stars}
              price={product.price}
              imageonHover={product.imageonHover}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default FeaturedCollectionComponent;
