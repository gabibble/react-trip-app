import React, { useState, useEffect } from "react";
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
import { TripOrigin } from "@mui/icons-material";

export const DataDisplay = () => {
  const navigate = useNavigate();

  let { tripData, getData } = useGetData();
  let { lastTrip, setLastTrip } = useGetLastTrip();

  //setting active trip to last added trip. However, it's not displaying.
  //For this reason, added a "show last trip" which sets the state to the active trip.
  let [activeTrip, setActiveTrip] = useState(lastTrip);

  let activateTrip = (data: {}) => {
    setActiveTrip(data);
  };

  const myAuth = localStorage.getItem("myAuth");

  if (!myAuth || myAuth === "false") {
    // Display hardcoded trips in case DB fails or is slow
    const trips = hardCodedTrips();
    tripData = [...tripData, ...trips];
  }

  const tripsHeading =
    tripData.length > 0 ? "Recently Added Trips" : "Add a trip to get started!";

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.light", width: 1 }} pt={0} mt={0}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          pt={2}
          pb={3}
        >
          <NewTrip variant="outlined" color="primary" text="New Trip" />
          {activeTrip.id ? (
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
          ) : (
            ""
          )}
          {tripData.length > 0 ? (
            <Button
              variant="outlined"
              size="large"
              onClick={() => activateTrip({})}
            >
              {" "}
              View All Trips
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </Box>
      <Container sx={{ py: 3 }} maxWidth="md">
        <TripDetails data={activeTrip} />
        <Typography variant="h4">{tripsHeading}</Typography>
        <br />
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
                  {myAuth === "true" ? (
                    <UpdateTrip id={trip.id} name={trip.destcity} data={trip} />
                  ) : (
                    ""
                  )}
                  {myAuth === "true" ? (
                    <DeleteDialog
                      size="small"
                      id={trip.id}
                      name={trip.destcity}
                    />
                  ) : (
                    ""
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

function hardCodedTrips() {
  const trips = [
    {
      accom: "campground",
      accomcost: "100.00",
      dest: "chicago",
      destcity: "Chicago",
      destcountry: "United States",
      distance: 920,
      duration: "2.5",
      guests: 2,
      id: "cmgyiC23SU10txQb-KRB46QV_so_Mv6CxInnTHHONK4",
      mode: "plane",
      month: 4,
      nights: 4,
      origcity: "Denver",
      origin: "denver",
      photo:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxDaGljYWdvfGVufDB8fHx8MTY2NDgyNTk5MA&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/Nyvq2juw4_o",
      prcp: "4.8",
      prcps:
        "2.299,2.114,2.657,4.15,4.756,4.528,4.02,4.094,3.331,3.858,2.728,2.331",
      tavg: 61,
      temps: "25,29,39,50,61,71,76,74,67,54,41,31",
      tmax: 71,
      tmin: 52,
      totalcost: "954.00",
      travcost: "854.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "seattle",
      destcity: "Seattle",
      destcountry: "United States",
      distance: 174,
      duration: "2.9",
      guests: 2,
      id: "4kxbjGW1wHQ5NQuottauV0aXVmZwkxp1z7g_tibzT3k",
      mode: "car",
      month: 4,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxTZWF0dGxlfGVufDB8fHx8MTY2NDg5NTEyMw&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/skUTVJi8-jc",
      prcp: "1.9",
      prcps:
        "5.78,3.78,4.181,3.193,1.906,1.449,0.594,0.972,1.61,3.909,6.28,5.772",
      tavg: 56,
      temps: "42,43,46,50,56,61,66,66,62,53,45,41",
      tmax: 65,
      tmin: 48,
      totalcost: "637.00",
      travcost: "76.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "miami",
      destcity: "Miami",
      destcountry: "United States",
      distance: 2594,
      duration: "6.1",
      guests: 2,
      id: "ycvORSCF9HSW5ZoSTcuFx3t8UVDZ3hOrMIFJpYf_pvM",
      mode: "plane",
      month: 4,
      nights: 3,
      origcity: "San Francisco",
      origin: "san francisco",
      photo:
        "https://images.unsplash.com/photo-1501509497947-782640bc1412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxNaWFtaXxlbnwwfHx8fDE2NjQ4MjU2OTE&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/mWN686Fsbgs",
      prcp: "6.2",
      prcps:
        "1.835,2.146,2.484,3.343,6.181,10.504,7.307,9.52,10.209,7.583,3.539,2.441",
      tavg: 80,
      temps: "68,70,73,76,80,82,84,84,83,80,75,71",
      tmax: 87,
      tmin: 73,
      totalcost: "2574.00",
      travcost: "2013.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "portland",
      destcity: "Portland",
      destcountry: "United States",
      distance: 967,
      duration: "15.3",
      guests: 2,
      id: "zNs6_F0p0RyzxV5qgghBit-wPiFUZAA3kIvnSjsobrA",
      mode: "car",
      month: 0,
      nights: 3,
      origcity: "Los Angeles",
      origin: "los angeles",
      photo:
        "https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZHxlbnwwfHx8fDE2NjQ1NTQ2NzE&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/k0VeQ6sXHGg",
      prcp: "5.0",
      prcps:
        "5.039,3.693,3.98,2.945,2.551,1.63,0.508,0.551,1.524,3.425,5.417,5.72",
      tavg: 41,
      temps: "41,43,47,52,59,64,70,70,65,55,46,41",
      tmax: 46,
      tmin: 36,
      totalcost: "986.00",
      travcost: "425.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "Sayulita",
      destcity: "Sayulita",
      destcountry: "Mexico",
      distance: 1961,
      duration: "4.7",
      guests: 2,
      id: "nSuXnPbJtE7y-UFEE_Mj-rbVAra5gVX49ejrGBhzmnc",
      mode: "plane",
      month: 6,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1518888978380-8d0560d156ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxTYXl1bGl0YXxlbnwwfHx8fDE2NjQ5MjgwMzU&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/uMuFjkaLxkc",
      prcp: "13.3",
      prcps:
        "0.575,0.685,0.071,0.004,0.181,5.961,13.299,11.783,8.681,2.957,0.583,0.547",
      tavg: 77,
      temps: "67,68,70,72,76,78,77,77,77,76,72,67",
      tmax: 87,
      tmin: 68,
      totalcost: "2126.00",
      travcost: "1565.00",
    },
    {
      accom: "airbnb entire house",
      accomcost: "615.00",
      dest: "Rome",
      destcity: "Rome",
      destcountry: "Italy",
      distance: 5810,
      duration: "13.0",
      guests: 2,
      id: "PcTvZkeP8CN6NK_oTEHcoJD-SzWHLgIKGnrFo9fL1xE",
      mode: "plane",
      month: 5,
      nights: 3,
      origcity: "Portland",
      origin: "Portland",
      photo:
        "https://images.unsplash.com/photo-1529154036614-a60975f5c760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxSb21lfGVufDB8fHx8MTY2NDkyOTc3NA&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/gZKzBhsO6KY",
      prcp: "1.3",
      prcps:
        "2.646,2.705,2.248,2.969,2.441,1.287,0.831,1.492,2.768,3.823,4.472,4.043",
      tavg: 72,
      temps: "45,47,51,56,64,72,77,78,70,62,54,47",
      tmax: 82,
      tmin: 62,
      totalcost: "4906.00",
      travcost: "4291.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "maui",
      destcity: "Maui",
      destcountry: "United States",
      distance: 2556,
      duration: "6.0",
      guests: 2,
      id: "yc1ju0PcKq4tTlEm5DtfOPj8tYSeP8i3QEE4x8x7DIM",
      mode: "plane",
      month: 6,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1450045439515-ff27c2f2e6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxNYXVpfGVufDB8fHx8MTY2NDk5MjQ2Mw&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/9JrBiphz0e0",
      prcp: "0.6",
      prcps:
        "2.386,1.996,2.642,1.315,0.736,0.185,0.551,0.551,0.48,0.819,1.732,2.594",
      tavg: 79,
      temps: "72,72,73,74,76,78,79,80,79,78,76,73",
      tmax: 87,
      tmin: 71,
      totalcost: "2547.00",
      travcost: "1986.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "new york",
      destcity: "New York",
      destcountry: "United States",
      distance: 2445,
      duration: "5.8",
      guests: 2,
      id: "ipAxhvidfl2th2ONFRPVCjntEyKKGWKaPLRtp_9L834",
      mode: "plane",
      month: 0,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1541270941907-3f7143c8c7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrfGVufDB8fHx8MTY2NDk5OTg4Mw&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/raXnREhb-uI",
      prcp: "3.4",
      prcps:
        "3.449,2.98,4.126,3.874,3.969,4.339,4.665,4.15,3.819,3.787,3.327,4.142",
      tavg: 33,
      temps: "33,35,42,53,63,73,78,76,69,57,47,38",
      tmax: 40,
      tmin: 25,
      totalcost: "2469.00",
      travcost: "1908.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "paris",
      destcity: "Paris",
      destcountry: "France",
      distance: 5138,
      duration: "11.6",
      guests: 2,
      id: "j5QCMRABxTR8UWWx6TwYMsHWAZtja705K7bpIwXM4N8",
      mode: "plane",
      month: 0,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxwYXJpc3xlbnwwfHx8fDE2NjQ1NTc0MjE&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/Q0-fOL2nqZc",
      prcp: "1.8",
      prcps:
        "1.752,1.512,1.606,1.768,2.941,2.02,2.272,2.13,1.988,2.169,2.142,2.425",
      tavg: 41,
      temps: "41,43,49,54,60,65,69,69,62,55,47,43",
      tmax: 46,
      tmin: 36,
      totalcost: "4376.00",
      travcost: "3815.00",
    },
    {
      accom: "hotel",
      accomcost: "561.00",
      dest: "london",
      destcity: "London",
      destcountry: "United Kingdom",
      distance: 4927,
      duration: "11.1",
      guests: 2,
      id: "90XJJVGNZUcUs_c63F7rMK2kdNj96YhYXASTP6HasTY",
      mode: "plane",
      month: 0,
      nights: 3,
      origcity: "Portland",
      origin: "portland",
      photo:
        "https://images.unsplash.com/photo-1448906654166-444d494666b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgyOTV8MHwxfHNlYXJjaHwxfHxMb25kb258ZW58MHx8fHwxNjY1MDAwMjY0&ixlib=rb-1.2.1&q=80&w=1080",
      photolink: "https://unsplash.com/photos/CFi7_hCXecU",
      prcp: "2.3",
      prcps:
        "2.315,1.78,1.492,1.701,1.807,1.839,1.807,2.094,1.965,2.524,2.626,2.236",
      tavg: 42,
      temps: "42,42,46,50,56,62,66,65,60,54,47,42",
      tmax: 46,
      tmin: 37,
      totalcost: "4227.00",
      travcost: "3666.00",
    },
  ];
  return trips;
}
