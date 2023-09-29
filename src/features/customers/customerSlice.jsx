import { createSlice } from "@reduxjs/toolkit";
import accountSlice from "../accounts/accountSlice";

const initialState = {
  name: "",
  id: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(name, id) {
        return {
          payload: {
            name,
            id,
          },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.createdAt = new Date().toDateString();
      },
    },
    UpdateName(state, action) {
      state.name = action.name;
    },
  },
});

export const { createCustomer, UpdateName } = customerSlice.actions;

export default customerSlice.reducer;
