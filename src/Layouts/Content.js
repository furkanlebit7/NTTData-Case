import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Products from "../Components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Services/ProductService";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import LoadMoreButton from "../Components/LoadMoreButton";
import ContentHeader from "../Components/ContentHeader";

const Content = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState(true); //True = All <----> False = Favorites
  const [favorites, setFavorites] = useState([]);
  const [itemCount, setItemCount] = useState(4);

  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      const newList = favorites.filter((item) => item !== id);
      setFavorites(newList);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        py: 8,
      }}
    >
      <ContentHeader
        favorites={favorites}
        content={content}
        setContent={setContent}
      />
      <Products
        content={content}
        products={products}
        itemCount={itemCount}
        toggleFavorites={toggleFavorites}
      />
      <LoadMoreButton
        content={content}
        itemCount={itemCount}
        products={products}
        setItemCount={setItemCount}
      />
    </Container>
  );
};

export default Content;
