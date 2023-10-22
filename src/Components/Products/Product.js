import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { toggleFavorites } from "../../Redux/Slices/FavoriteSlice";

const Product = ({ product, favorites }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorites(product.id));
  };

  return (
    <Grid item xs={3}>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          border: "1px solid",
          borderColor: "#E6E6E6",
        }}
      >
        <CardActionArea
          sx={{
            p: "12px",
            height: "100%",
          }}
        >
          <IconButton
            onClick={() => {
              handleClick();
            }}
            aria-label="delete"
            sx={{
              position: "absolute",
              right: "20px",
              top: "20px",
              p: "4px",
              color: favorites.includes(product.id) ? "red" : "#00254F",
              backgroundColor: "#fff",
              "&:hover": {
                color: "red",
                backgroundColor: "#fff",
              },
            }}
          >
            {favorites.includes(product.id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <CardMedia
            component="img"
            height="140"
            image={product.imageUrl}
            alt="green iguana"
          />
          <CardContent
            sx={{
              p: "8px 0px",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{
                p: "4px 8px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#00254F",
              }}
            >
              {product?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{
                bgcolor: "#E6EEF8",
                fontWeight: "700",
                p: "4px 8px",
                fontSize: "14px",
                color: "#00254F",
              }}
            >
              {product?.price} TL
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{
                fontWeight: "500",
                p: "4px 8px",
                fontSize: "12px",
                color: "#00254F",
              }}
            >
              Description
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                p: "4px 8px",
                fontSize: "12px",
              }}
            >
              {product?.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              sx={{
                fontWeight: "400",
                p: "4px 8px",
                fontSize: "10px",
              }}
            >
              {product?.shippingMethod}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
