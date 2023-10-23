import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getFavorites } from "../../Redux/Slices/FavoriteSlice";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";

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
      <Grid
        spacing={"12px"}
        container
        sx={{ p: "12px" }}
        rowSpacing={4}
        display={{ xs: "none", sm: "flex" }}
      >
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
      <Carousel sx={{ display: { xs: "block", sm: "none" } }}>
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
      </Carousel>
    </Box>
  );
};

export default Products;
