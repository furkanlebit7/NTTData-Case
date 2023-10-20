import React from "react";
import { Box, Button, Container } from "@mui/material";
import { logo } from "../../Assets/Images/Svg/Logo";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e0e0e0",
        p: 0,
        zIndex: 1000,
        position: "relative",
        bgcolor: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 4,
          pb: 2,
          px: "0 !important",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box>{logo}</Box>
        <Search />
        <Button
          variant="contained"
          sx={{
            width: "110px",
            py: 1,
            bgcolor: "ntt.main",
          }}
        >
          <SearchIcon />
        </Button>
      </Container>
    </Box>
  );
};

export default Navbar;
