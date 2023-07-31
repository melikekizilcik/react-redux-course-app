import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 0,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearAll: (state) => {
      state.cardItems = [];
    },
    deleteCourse: (state, action) => {
      //console.log(action.payload);
      const courseId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== courseId);
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { clearAll, deleteCourse, increase, decrease, calculateTotal } =
  cardSlice.actions;
export default cardSlice.reducer;
