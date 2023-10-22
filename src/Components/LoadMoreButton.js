import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LoadMoreButton = ({ itemCount, products, setItemCount, content }) => {
  return (
    <Box textAlign={"center"}>
      {itemCount < products.data.length && content && (
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
  );
};

export default LoadMoreButton;
