import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  chooseName,
  chooseDescrip,
  chooseOrigin,
  chooseDest,
  chooseGuests,
  chooseNights,
  chooseAccom,
  chooseMonth,
  chooseMode,
} from "../../redux/slices/rootSlice";
import { Input } from "../sharedComponents/Input";

import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { prototype } from "events";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// import { getAuth } from "firebase/auth";

interface FormProps {
  id?: string;
  data?: {};
  updateData?: any;
}

interface PlantState {
  name: string;
  descrip: string;
  origin: string;
  dest: string;
  guests: number;
  nights: number;
  accom: string;
  month: number;
  mode: string;
}

export const TripForm = (props: FormProps) => {
  // const auth = getAuth();
  // if (auth) {
  //   console.log("user logged in at tripform");
  // }

  const dispatch = useDispatch();
  let { tripData, getData } = useGetData();
  const store = useStore();
  const name = useSelector<PlantState>((state) => state.name);
  const descrip = useSelector<PlantState>((state) => state.descrip);
  const origin = useSelector<PlantState>((state) => state.origin);
  const dest = useSelector<PlantState>((state) => state.dest);
  const guests = useSelector<PlantState>((state) => state.guests);
  const nights = useSelector<PlantState>((state) => state.nights);
  const accom = useSelector<PlantState>((state) => state.accom);
  const month = useSelector<PlantState>((state) => state.month);
  const mode = useSelector<PlantState>((state) => state.mode);

  const { register, handleSubmit } = useForm({});

  const [selectMonth, setSelectMonth] = React.useState("6");
  const [selectMode, setSelectMode] = React.useState("plane");
  const [selectAccom, setSelectAccom] = React.useState("hotel");

  const handleMonthChange = (event: SelectChangeEvent) => {
    setSelectMonth(event.target.value as string);
  };
  const handleAccomChange = (event: SelectChangeEvent) => {
    setSelectAccom(event.target.value as string);
  };
  const handleModeChange = (event: SelectChangeEvent) => {
    setSelectMode(event.target.value as string);
  };

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: any, event: any) => {
    console.log(props.id);
    setLoading(true);

    if (props.id!) {
      dispatch(chooseName("cool trip"));
      dispatch(chooseDescrip("great trip"));
      await serverCalls.update(props.id!, data);
      console.log(`Updated: ${data} ${props.id}`);
      window.location.reload();
      event.target.reset();
    } else {
      dispatch(chooseName("cool trip"));
      dispatch(chooseDescrip("great trip"));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseDest(data.dest));
      dispatch(chooseGuests(data.guests));
      dispatch(chooseNights(data.nights));
      dispatch(chooseAccom(data.accom));
      dispatch(chooseMonth(data.month));
      dispatch(chooseMode(data.mode));

      await serverCalls.create(store.getState());
      window.location.reload();
      event.target.reset();
    }
  };

  let originValue;
  let destValue;
  let guestsValue;
  let nightsValue;

  if (props.updateData) {
    originValue = props.updateData.origin;
    destValue = props.updateData.dest;
    guestsValue = props.updateData.guests;
    nightsValue = props.updateData.nights;
  } else {
    originValue = "";
    destValue = "";
    guestsValue = "2";
    nightsValue = "3";
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <Input
              {...register("name")}
              name="name"
              type="text"
              label="Trip Name"
              defaultValue={nameValue}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              {...register("descrip")}
              name="descrip"
              type="text"
              label="Trip Description"
              defaultValue={descripValue}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            {/* <label htmlFor="origin">Starting Point</label> */}
            <Input
              {...register("origin")}
              name="origin"
              label="Starting Point"
              type="text"
              defaultValue={originValue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <label htmlFor="dest">Your Destination</label> */}
            <Input
              {...register("dest")}
              name="dest"
              type="text"
              label="Your Destination"
              defaultValue={destValue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              {...register("guests")}
              name="guests"
              placeholder="guests"
              label="How many Guests?"
              type="number"
              defaultValue={guestsValue}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <label htmlFor="nights">Number of nights</label> */}
            <Input
              {...register("nights")}
              name="nights"
              placeholder="nights"
              type="number"
              label="How Many Nights?"
              defaultValue={nightsValue}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl sx={{ my: 2, minWidth: 170 }} size="small">
              <InputLabel id="month">Month</InputLabel>
              <Select
                {...register("month")}
                labelId="month"
                id="month"
                value={selectMonth}
                label="Month"
                onChange={handleMonthChange}
                fullWidth
              >
                <MenuItem value={0}>Jan</MenuItem>
                <MenuItem value={1}>Feb</MenuItem>
                <MenuItem value={2}>March</MenuItem>
                <MenuItem value={3}>April</MenuItem>
                <MenuItem value={4}>May</MenuItem>
                <MenuItem value={5}>June</MenuItem>
                <MenuItem value={6}>July</MenuItem>
                <MenuItem value={7}>Aug</MenuItem>
                <MenuItem value={8}>Sept</MenuItem>
                <MenuItem value={9}>Oct</MenuItem>
                <MenuItem value={10}>Nov</MenuItem>
                <MenuItem value={11}>Dec</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl sx={{ my: 2, minWidth: 170 }} size="small">
              <InputLabel id="accom">Accommodation</InputLabel>
              <Select
                {...register("accom")}
                labelId="accom"
                id="accom"
                value={selectAccom}
                label="Accommodation"
                onChange={handleAccomChange}
                fullWidth
              >
                <MenuItem value={"hotel"}>Hotel</MenuItem>
                <MenuItem value={"airbnb entire house"}>
                  AirBnb Entire House
                </MenuItem>
                <MenuItem value={"airbnb private room"}>
                  AirBnb Private Room
                </MenuItem>
                <MenuItem value={"campground"}>Campground</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl sx={{ my: 2, minWidth: 170 }} size="small">
              <InputLabel id="mode">Mode</InputLabel>
              <Select
                {...register("mode")}
                labelId="mode"
                id="mode"
                value={selectMode}
                label="Mode"
                onChange={handleModeChange}
                fullWidth
              >
                <MenuItem value={"car"}>Car</MenuItem>
                <MenuItem value={"plane"}>Plane</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={loading}
        >
          Submit
        </LoadingButton>
      </form>
    </div>
  );
};
