import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import React from "react";
import Product from "./Product";

const Products = ({ products, itemCount, toggleFavorites }) => {
  if (products.status === "loading") {
    return (
      <Stack justifyContent={"center"} alignItems={"center"}>
        <CircularProgress />
      </Stack>
    );
  }
  return (
    <Box sx={{ my: 3 }}>
      <Grid spacing={"12px"} container sx={{ p: "12px" }} rowSpacing={4}>
        {products.status === "succeeded" &&
          products.data
            .slice(0, itemCount)
            .map((product, index) => (
              <Product
                key={index}
                product={product}
                toggleFavorites={toggleFavorites}
              />
            ))}
      </Grid>
    </Box>
  );
};

export default Products;
