import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import React from "react";
import Product from "./Product";
import { getFavorites } from "../../Redux/Slices/FavoriteSlice";
import { useSelector } from "react-redux";

const Products = ({ products, content, itemCount, toggleFavorites }) => {
  const favorites = useSelector(getFavorites);

  const filteredList = products.data.filter((product) => {
    if (content) {
      return product;
    } else {
      return favorites.includes(product.id);
    }
  });

  if (products.status === "loading") {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ my: "20px" }}
      >
        <CircularProgress />
      </Stack>
    );
  }
  return (
    <Box sx={{ my: 3 }}>
      <Grid spacing={"12px"} container sx={{ p: "12px" }} rowSpacing={4}>
        {products.status === "succeeded" &&
          filteredList
            .slice(0, itemCount)
            .map((product, index) => (
              <Product
                key={index}
                product={product}
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            ))}
      </Grid>
    </Box>
  );
};

export default Products;
