import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    ntt: {
      main: "#0059BC",
      dark: "#00254F",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
