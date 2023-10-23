import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const Search = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            p: 0,
            width: "100%",
            flexGrow: 1,
          }}
        />
        <FormControl
          fullWidth
          size="small"
          sx={{
            width: "160px",
            display: { xs: "none", sm: "inherit" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem
              value={10}
              sx={{
                bgcolor: "ntt.dark",
                color: "white",
                "&:hover": {
                  bgcolor: "ntt.main",
                },
                selected: {
                  bgcolor: "orange",
                },
              }}
            >
              Data
            </MenuItem>
            <MenuItem
              value={30}
              sx={{
                bgcolor: "ntt.dark",
                color: "white",
                "&:hover": {
                  bgcolor: "ntt.main",
                },
              }}
            >
              Category Name 1
            </MenuItem>
            <MenuItem
              value={40}
              sx={{
                bgcolor: "ntt.dark",
                color: "white",
                "&:hover": {
                  bgcolor: "ntt.main",
                },
              }}
            >
              Category Name 2
            </MenuItem>
            <MenuItem
              value={50}
              sx={{
                bgcolor: "ntt.dark",
                color: "white",
                "&:hover": {
                  bgcolor: "ntt.main",
                },
              }}
            >
              Category Name 3
            </MenuItem>
            <MenuItem
              value={60}
              sx={{
                bgcolor: "ntt.dark",
                color: "white",
                "&:hover": {
                  bgcolor: "ntt.main",
                },
              }}
            >
              Category Name 4
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Search;
