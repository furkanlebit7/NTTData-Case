import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, IconButton } from "@mui/material";
import exampleProduct from "../../Assets/Images/exampleProduct.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  return (
    <Grid item xs={3}>
      <Card
        sx={{
          maxWidth: 345,
          border: "1px solid",
          borderColor: "#E6E6E6",
        }}
      >
        <CardActionArea
          sx={{
            p: "12px",
          }}
        >
          <IconButton
            aria-label="delete"
            sx={{
              position: "absolute",
              right: "20px",
              top: "20px",
              p: "4px",
              color: "#d1d1d1",
              backgroundColor: "#fff",
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <CardMedia
            component="img"
            height="140"
            image={exampleProduct}
            alt="green iguana"
          />
          <CardContent sx={{ p: "8px 0px" }}>
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
              Product Name
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
              1.299,00 TL
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
              Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate
              velit id sit leo aliquet id at. Vel tellus tempus lacus tristique
              nulla pretium erat duis.
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
              Ücretsiz - Aynı Gün Kargo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
