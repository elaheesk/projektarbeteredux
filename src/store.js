import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./redux/cardSlice";
export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
