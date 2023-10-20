import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { footerLogo } from "../Assets/Images/Svg/FooterLogo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "ntt.main",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: "65px",
          color: "white",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Box>{footerLogo}</Box>
            <Typography
              variant="body2"
              sx={{
                mt: "24px",
                fontSize: "16px",
                fontWeight: "400",
                maxWidth: "410px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
              aliquam neque.
            </Typography>
            <Stack direction={"row"} sx={{ mt: "65px" }}>
              <TextField
                size="small"
                id="outlined-basic"
                label="filled"
                variant="filled"
                sx={{ bgcolor: "white", flexGrow: 1 }}
              />
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "ntt.dark",
                  px: "30px",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ display: "inline" }}>Sign Up</Typography>
              </Button>
            </Stack>
          </Box>
          <Box sx={{ maxWidth: "488px", width: "100%" }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ ml: 2 }} variant="h6" component="div">
                    Title
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                  </List>
                </Grid>
              </Box>
              <Box>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ ml: 2 }} variant="h6" component="div">
                    Title
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                  </List>
                </Grid>
              </Box>
              <Box>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ ml: 2 }} variant="h6" component="div">
                    Title
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Subtitle" />
                    </ListItem>
                  </List>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Divider
        sx={{
          bgcolor: "#D9D9D9",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          py: "20px ",
          color: "white",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            contact@nttdata.com
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            +3 9876 765 444
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
