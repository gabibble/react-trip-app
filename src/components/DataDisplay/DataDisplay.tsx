import React, { useState } from "react";
//card grid
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useGetData, useGetLastTrip } from "../../custom-hooks";
import { Box, Button, Stack } from "@mui/material";
import { TripDetails } from "../TripDetails";
import { useNavigate } from "react-router-dom";
import { NewTrip } from "../NewTrip";

import { UpdateTrip } from "../UpdateTrip";
import { DeleteDialog } from "../DeleteDialog";

export const DataDisplay = () => {
  const navigate = useNavigate();

  let { tripData, getData } = useGetData();
  let { lastTrip, setLastTrip } = useGetLastTrip();

  //setting active trip to last added trip. However, it's not displaying.
  //For this reason, added a "show last trip" which sets the state to the active trip.
  let [activeTrip, setActiveTrip] = useState(lastTrip);

  let activateTrip = (data: {}) => {
    setActiveTrip(data);
    console.log(data);
  };

  const myAuth = localStorage.getItem("myAuth");
  if (myAuth === "true") {
    return (
      <div>
        <Box
          sx={{ backgroundColor: "secondary.light", width: 1 }}

        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            pt={2}
            pb={3}
          >
            <NewTrip variant="outlined" color="primary" text="New Trip" />
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                activateTrip(lastTrip);
                window.scrollTo({ top: 130, left: 0, behavior: "smooth" });
              }}
            >
              {" "}
              Last Added Trip
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => activateTrip({})}
              // onClick={() => window.location.reload()}
            >
              {" "}
              View All Trips
            </Button>
          </Stack>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          <TripDetails data={activeTrip} />
          <Typography variant="h4">Your Trips</Typography>
          <br />
          {/* Cards siplaying all trips */}
          <Grid container spacing={4}>
            {tripData.map((trip: any, index: any) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "320px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "0",
                      height: "120px",
                    }}
                    image={trip.photo}
                    alt={trip.destcity}
                  />
                  <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {trip.destcity}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: "16px" }}>
                      ${Math.round(trip.totalcost)}
                    </Typography>
                    <Typography variant="body2" fontSize="12px">
                      Trip cost for {trip.guests} guests from {trip.origcity}{" "}
                      staying {trip.nights} nights at a {trip.accom}.{" "}
                      {trip.distance} miles away by {trip.mode}.
                    </Typography>
                  </CardContent>
                  {/* card actions here */}
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(event) => {
                        activateTrip(trip);
                        window.scrollTo({
                          top: 130,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      View
                    </Button>
                    <UpdateTrip id={trip.id} name={trip.destcity} data={trip} />
                    <DeleteDialog
                      size="small"
                      id={trip.id}
                      name={trip.destcity}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Box
          sx={{ backgroundColor: "secondary.light", width: 1 }}
          pt={0}
          mt={0}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            pt={2}
            pb={3}
          >
            <NewTrip variant="outlined" color="primary" text="New Trip" />
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                activateTrip(lastTrip);
                window.scrollTo({ top: 130, left: 0, behavior: "smooth" });
              }}
            >
              {" "}
              Last Added Trip
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => activateTrip({})}
            >
              {" "}
              View All Trips
            </Button>
          </Stack>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          <TripDetails data={activeTrip} />
          <Typography variant="h4">Recently Added</Typography>
          <br />
          {/* Cards siplaying all trips */}
          <Grid container spacing={4}>
            {tripData.map((trip: any, index: any) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "320px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "0",
                      height: "120px",
                    }}
                    image={trip.photo}
                    alt={trip.destcity}
                  />
                  <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {trip.destcity}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: "16px" }}>
                      ${Math.round(trip.totalcost)}
                    </Typography>
                    <Typography variant="body2" fontSize="12px">
                      Trip cost for {trip.guests} guests from {trip.origcity}{" "}
                      staying {trip.nights} nights at a {trip.accom}.{" "}
                      {trip.distance} miles away by {trip.mode}.
                    </Typography>
                  </CardContent>
                  {/* card actions here */}
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={(event) => {
                        activateTrip(trip);
                        window.scrollTo({
                          top: 130,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
};
