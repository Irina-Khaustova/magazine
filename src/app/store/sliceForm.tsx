import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface formState {
    valueName: string
    valueEmail: string
    valuePassword: string
    valueRepeatPassword: string
  }
  
  // Определение начального состояния, используя тип
  const initialState: formState = {
    valueName: '',
    valueEmail: '',
    valuePassword: '',
    valueRepeatPassword: ''
  }

console.log(1)

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setValue(state) {
        console.log(1)
    }
  },
});

export const { setValue } =
  formSlice.actions;
export const form = (state: RootState) => state.form;
export default formSlice.reducer;