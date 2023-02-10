import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TypographyCss } from "./HeroCss";

import bhargav from "../assets/Bhargav.png"
function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "#0CBBA0", width: "150px" }}
            >
              Hello I'm
            </Button>
            <Typography variant="h3" sx={{ fontWeight: "750", mt: 3, mb: 1 }}>
              Bhargav Sai Madugula
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Web developer
            </Typography>
            <Box
              sx={{
                height: "120px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" sx={TypographyCss}>
                <EmailIcon sx={{ mr: 1 }} />
                bsai1284@gmail.com
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocalPhoneIcon sx={{ mr: 1 }} />
                8341661804
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocationOnIcon sx={{ mr: 1 }} />
                Plot No.100, PM PALEM, VISAKHAPATNAM, ANDHRA PRADESH 
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
        
          <a href="https://www.instagram.com/_bhargavv._/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://github.com/Bhargav-Sai-Madugula" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/bhargavsaimadugula/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/BhargavSai_" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
          </a>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "380px",
                width: "380px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                mt: 8,
              }}
            >
              <img
                src={bhargav}
                style={{
                  height: "350px",
                  width: "350px",
                  objectFit: "cover",
                  objectPosition: "10% 45%",
                  border: "none",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
