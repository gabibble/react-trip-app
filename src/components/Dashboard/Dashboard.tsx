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

interface Props {
  title: string;
}

export const Dashboard = (props: Props) => {

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Box sx={{ backgroundColor: "secondary.light", width: 1 }} pt={10} mb={0}>
        <Typography variant="h4" textAlign="center" color="primary">
          {props.title}{" "}
        </Typography>
      </Box>
      <DataDisplay />
    </div>
  );
};
