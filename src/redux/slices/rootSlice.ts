import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "your next trip",
    descrip: "We deserve a vacation!",
    origin: "san francisco",
    dest: "miami",
    guests: 2,
    nights: 3,
    accom: "hotel",
    month: 4,
    mode: "plane",
  },
  reducers: {
    chooseName: (state, action) => {
      state.name = action.payload;
    },
    chooseDescrip: (state, action) => {
      state.descrip = action.payload;
    },
    chooseOrigin: (state, action) => {
      state.origin = action.payload;
    },
    chooseDest: (state, action) => {
      state.dest = action.payload;
    },
    chooseGuests: (state, action) => {
      state.guests = action.payload;
    },
    chooseNights: (state, action) => {
      state.nights = action.payload;
    },
    chooseAccom: (state, action) => {
      state.accom = action.payload;
    },
    chooseMonth: (state, action) => {
      state.month = action.payload;
    },
    chooseMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
  chooseName,
  chooseDescrip,
  chooseOrigin,
  chooseDest,
  chooseGuests,
  chooseNights,
  chooseAccom,
  chooseMonth,
  chooseMode,
} = rootSlice.actions;
