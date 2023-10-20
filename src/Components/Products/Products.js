import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Product from "./Product";

const Products = ({ products, itemCount }) => {
  return (
    <Box sx={{ my: 3 }}>
      <Grid spacing={"12px"} container sx={{ p: "12px" }} rowSpacing={4}>
        {products.data.slice(0, itemCount).map((product, index) => (
          <Product key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
