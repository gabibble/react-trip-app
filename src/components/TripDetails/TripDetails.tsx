import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { deepOrange, indigo, green, pink } from "@mui/material/colors";
import { Bar, Line, Chart } from "react-chartjs-2";
import { WeatherChart } from "../Chart";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface Props {
  //   id?: any;
  data?: any;
}

export const TripDetails = (props: Props) => {
  if (!props.data.id) {
    return (
      <div>
      </div>
    );
  } else {
    let temps = props.data.temps.split(",").map((numb: string) => +numb);
    //   console.log(temps);

    let prcps = props.data.prcps.split(",").map((numb: string) => +numb);
    //   console.log(prcps);
    return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h2" id="city">
            {props.data.destcity}
          </Typography>
          <Typography variant="h4" mb={3}>
            Estimated Total Cost: <b>${Math.round(props.data.totalcost)}</b>
          </Typography>
          <Divider></Divider>
          <Typography variant="h5" mt={3}>
            Average weather in {months[props.data.month]}
          </Typography>
          <Stack
            direction={{ xs: "row" }}
            spacing={3}
            mt={1}
            mb={2}
            // justifyContent="center"
          >
            <div>
              <Avatar sx={{ bgcolor: "#9cd2b1", width: 56, height: 56 }}>
                <b>{props.data.tavg} </b> °f
              </Avatar>
              <p className="temp">Average Temp</p>
            </div>
            <div>
              <Avatar sx={{ bgcolor: "#c5cae9", width: 56, height: 56 }}>
                <b>{props.data.tmin}</b> °f
              </Avatar>
              <p className="temp">Min Temp</p>
            </div>
            <div>
              <Avatar sx={{ bgcolor: deepOrange[200], width: 56, height: 56 }}>
                <b>{props.data.tmax}</b> °f
              </Avatar>
              <p className="temp">Max Temp</p>
            </div>
            <div>
              <Avatar sx={{ bgcolor: "#377793", width: 56, height: 56 }}>
                <b>{props.data.prcp}</b>in
              </Avatar>
              <p className="temp">Average Rainfall</p>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div>
            <img src={props.data.photo} alt="" />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div>
            <Typography variant="h5" mb={1} mt={2}>
              Travel by {props.data.mode}:
            </Typography>
            <Typography variant="body2">
              <li>
                <b>{props.data.distance} miles</b> from {props.data.origcity}
              </li>
              <li>
                About <b>{Math.round(props.data.duration)} hours</b> by
                {props.data.mode}
              </li>
              <li>
                About <b>${Math.round(props.data.travcost)}</b> for{" "}
                {props.data.guests} guests round trip
              </li>
            </Typography>
            <br />
            <Typography variant="h5" mb={1}>
              Accommodation
            </Typography>
            <Typography variant="body2">
              <li>
                About <b>${Math.round(props.data.accomcost)}</b> for{" "}
                {props.data.guests} people to stay {props.data.nights} nights at
                a {props.data.accom}
              </li>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5" my={2} textAlign="center">
            Yearly Weather Patterns
          </Typography>
          <WeatherChart prcps={prcps} temps={temps} />
        </Grid>
      </Grid>
    );
  }
};
