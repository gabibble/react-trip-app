import React from "react";
import { NavBar } from "../NavBar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";


export const About = () => {
  const navigate = useNavigate();

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
        <Typography variant="h4" mt={4} mb={1}>
          Welcome!
        </Typography>
        <Typography variant="body2">
          This project is{" "}
          <a
            href="https://github.com/gabibble/react-trip-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          and created by{" "}
          <a
            href="https://www.juliagiebultowicz.com/"
            target="_blank"
            rel="noreferrer"
          >
            Julia Giebultowicz
          </a>
          . Back-end API build in{" "}
          <a
            href="https://github.com/gabibble/flask_trip_app"
            target="_blank"
            rel="noreferrer"
          >
            Flask
          </a>{" "}
          with a PostgreSQL database. Front-end built in React. This project was
          an opportunity to combine my love of travel, geography, design, data,
          and of course, coding. I hope you find it useful and fun to use! The
          data is based on estimates and should only be used as a starting point
          for travel plans. See where the data is coming from below. I’d love to
          continue to update this project with more accurate and specific data.
          If you have any ideas about how to improve this application,{" "}
          <a href="mailto:juliagieb@gmail.com">let me know!</a>
        </Typography>
        <Typography variant="h4" mt={3} mb={1}>
          Sources
        </Typography>
        <Typography variant="h6" mt={2}>
          Distance and Travel Time
        </Typography>
        <Typography variant="body2">
          Flying distance based on Geodesic distance collected via{" "}
          <a
            href="https://geopy.readthedocs.io/en/stable/"
            target="_blank"
            rel="noreferrer"
          >
            GeoPy
          </a>
          . Flight cost calculated based on{" "}
          <a
            href="https://www.transportation.gov/sites/dot.gov/files/2022-08/SIFL_Appendix_B_2022q1q2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Standard Industry Fare Levels for 2022
          </a>
          . Flight time based on 465 miles per hour plus 30 minutes. Driving
          distances and times provided by{" "}
          <a href="https://truewayapi.com/" target="_blank" rel="noreferrer">
            True Way Matrix API
          </a>
          . Geodesic distance is used in instances where no driving data is
          available. Travel time assumes 60 miles per hour driving speed.
          Driving cost of .22 cents per mile based on{" "}
          <a
            href="https://www.gsa.gov/travel/plan-and-book"
            target="_blank"
            rel="noreferrer"
          >
            Government Services Administration per diem data.
          </a>{" "}
        </Typography>
        <Typography variant="h6" mt={2}>
          Accomodation
        </Typography>
        <Typography variant="body2">
          Accommodation data calculations based on average rates from the
          following sources: <a href="#"></a>
          hotel rate data is from{" "}
          <a
            href="https://www.statista.com/markets/420/topic/1018/accommodation/#overview"
            target="_blank"
            rel="noreferrer"
          >
            Statista.com
          </a>
          . AirBnb cost data is from{" "}
          <a
            href="https://www.alltherooms.com/analytics/average-airbnb-prices-by-city/"
            target="_blank"
            rel="noreferrer"
          >
            AllTheRooms.com
          </a>
          . Camping cost data is from{" "}
          <a
            href="https://www.letstravelfamily.com/average-cost-of-camping/"
            target="_blank"
            rel="noreferrer"
          >
            LetsTravelFamily.com
          </a>{" "}
          .
        </Typography>
        <Typography variant="h6" mt={2}>
          Photos
        </Typography>
        <Typography variant="body2">
          Photos provided by{" "}
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            UnSplash
          </a>
          . Home page photo by{" "}
          <a
            href="https://www.pexels.com/photo/photo-of-woman-wearing-red-dress-2310604/"
            target="_blank"
            rel="noreferrer"
          >
            Brett Sayles
          </a>
        </Typography>
        <Typography variant="h6" mt={2}>
          Climate Data
        </Typography>
        <Typography variant="body2">
          Average cliate data from{" "}
          <a href="https://meteostat.net/en/" target="_blank" rel="noreferrer">
            MeteoStat
          </a>
          . Current weather (coming soon) and geocoding from{" "}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
          >
            OpenWeather
          </a>
          .
        </Typography>
        <Typography variant="h4" mt={4} mb={1}>
          Credits
        </Typography>
        <Typography variant="body2" mb={8}>
          Thank you to all my friends and family who supported me through this
          process. Thank you to Ryan and Alex for all the help. Thank you to all
          the free and open source resources, APIs and frameworks that made this
          project possible. And thanks for all the fish.
        </Typography>
      </Container>
      <Box sx={{ backgroundColor: "secondary.light", width: 1 }} pt={0} mt={0}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          pt={4}
          pb={8}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/Dashboard")}
          >
            {" "}
            Add a Tip
          </Button>
          <Button variant="outlined" size="large" onClick={() => navigate("/")}>
            {" "}
            Home
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
