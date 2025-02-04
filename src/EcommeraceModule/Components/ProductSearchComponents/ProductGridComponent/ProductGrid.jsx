import React from "react";
import { Grid2 as Grid,Box } from "@mui/material";
import ProductCard from "../../ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid item key={product.id} size={2.4}>
            <ProductCard
              image={product.productCardImage}
              heading={product.heading}
              brand={product.brand}
              stars={product.feedback[0]?.stars || 0}
              price={product.price}
              imageonHover={product.imageonHover}
            />
          </Grid>
        ))
      ) : (
        <Box sx={{ textAlign: "center", width: "100%", mt: 5 }}>
          No products found.
        </Box>
      )}
    </Grid>
  );
};

export default ProductGrid;
