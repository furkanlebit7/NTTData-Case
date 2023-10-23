import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import { getFavorites } from "../Redux/Slices/FavoriteSlice";

const ContentHeader = ({ content, setContent }) => {
  const favorites = useSelector(getFavorites);
  return (
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
            fontSize: { xs: "16px", sm: "24px", md: "32px" },
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
  );
};

export default ContentHeader;
