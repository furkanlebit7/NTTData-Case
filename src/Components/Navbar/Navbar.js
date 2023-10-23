import React, { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { logo } from "../../Assets/Images/Svg/Logo";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          px: { tablet: "32 px", lg: "0 !important" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: { sm: "center" },
          gap: 2,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", sm: "center" }}
        >
          <Box>{logo}</Box>
          <Button
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            flex: 1,
          }}
        >
          <Search />
          <Button
            variant="contained"
            sx={{
              width: "110px",
              py: 1,
              ml: { xs: 0, sm: 2 },
              bgcolor: "ntt.main",
            }}
          >
            <SearchIcon />
          </Button>
        </Stack>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "white",
          minWidth: "100vw",
          minHeight: "100vh",
          display: open ? "block" : "none",
        }}
      >
        <ul className="cursor-pointer flex flex-col items-center justify-evenly min-h-[70vh] text-xl">
          <li
            className="font-bold text-2xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </li>
          <li>Data</li>
          <li>Category Name 1</li>
          <li>Category Name 2</li>
          <li>Category Name 3</li>
          <li>Category Name 4</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
