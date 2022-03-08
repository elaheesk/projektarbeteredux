import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: Date.now().toString(),
  name: "ELAHE ESKANDARI",
  cardnumber: "1234 7568 9101 1234",
  expirydate: "01/27",
  cvc: "230",
  vendor: "Visa",
  activated: false,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.cardnumber = action.payload.email;
      state.cardnumber = action.payload.cardnumber;
      state.expirydate = action.payload.expirydate;
      state.cvc = action.payload.cvc;
      state.vendor = action.payload.vendor;
      state.activated = action.payload.activatedd;
    },
  },
});

export const { update } = cardSlice.actions;

export default cardSlice.reducer;
