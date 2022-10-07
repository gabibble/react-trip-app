import React from "react";
import { NavBar } from "../NavBar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DataDisplay } from "../DataDisplay";
import { NewTrip } from "../NewTrip";
// import { getAuth } from "firebase/auth";
// import { GoogleButton } from "../SignIn";
// import { useSigninCheck } from "reactfire";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";



export const About = () => {


  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{ backgroundColor: "secondary.light", width: 1 }}
        pt={12}
        pb={3}
        mb={3}
      >
        <Typography
          variant="h1"
          textAlign="center"
          color="primary"
          fontSize="50px"
        >
          About this Project
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Typography variant="h4">Welcome!</Typography>
        <Typography variant="body2">
          This project was built as my Coding Temple Capstone project. It was an
          opportunity to combine my love of travel, geography, design, data, and
          of course, coding. I hope you find it useful and fun to use! The data
          is based on estimates and should only be used as a starting point for
          travel plans, not as a reliable source of cost information. See where
          the data is coming from below. I’d love to continue to update this
          project with more accurate and specific data. If you have any ideas
          about how to improve this application, let me know!
        </Typography>
      </Container>
    </div>
  );
};
