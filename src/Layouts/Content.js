import { Box, Button, Container, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
import Products from "../Components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Services/ProductService";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Content = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState(true); //True = All <----> False = Favorites
  const [favorites, setFavorites] = useState([]);
  const [itemCount, setItemCount] = useState(4);
  console.log("favorites", favorites);

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
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant={"h4"}
            sx={{
              fontWeight: 500,
              fontSize: "32px",
            }}
          >
            Content title goes here
          </Typography>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Stack direction={"row"} gap={1}>
              <FavoriteBorderIcon />
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                {favorites.length} ÜRÜN
              </Typography>
            </Stack>
            {content ? (
              <Button
                onClick={() => setContent(!content)}
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  bgcolor: "ntt.main",
                }}
              >
                Beğenilenler
              </Button>
            ) : (
              <Button
                onClick={() => setContent(!content)}
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                }}
              >
                Tüm Ürünler
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
      <Products
        products={products}
        itemCount={itemCount}
        toggleFavorites={toggleFavorites}
      />
      <Box textAlign={"center"}>
        {itemCount < products.data.length && (
          <Button
            onClick={() => {
              setItemCount(itemCount + 4);
            }}
            endIcon={<ArrowRightAltIcon />}
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "ntt.main",
              py: 2,
              px: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "400",
              }}
            >
              Daha Fazla
            </Typography>
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Content;
