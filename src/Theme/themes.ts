import { createTheme } from "@mui/material";
import { fontFamily } from "@mui/system";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#065579",
    },
    secondary: {
      main: "#aedcc0",
      light: "#e7f9ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontFamily: "Poppins",
    },
    h1: {
      fontSize: 64,
      fontWeight: 400,
      fontFamily: "Poppins",
    },
    h2: {
      fontFamily: "Poppins",
    },
    h3: {
      fontFamily: "Poppins",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: 28
    },
    h5: {
      fontFamily: "Poppins",
    },
    h6: {
      fontFamily: "Poppins",
      fontSize: "16px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
    caption: {
      lineHeight: 0.5,
      textAlign: "center",
    },
    fontFamily: "Poppins",
  },
});
