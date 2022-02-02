import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../services";

const initialState = {
  cars: [],
  status: null,
  error: null
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, { rejectWithValue }) => {
      try {
        const cars = await carService.getAll();
        return cars
      } catch (e) {
        return rejectWithValue(e.message)
      }

    }
)

const carSlice = createSlice({

  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCars.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [getAllCars.fulfilled]: (state, action) => {
      state.cars = action.payload
    },
    [getAllCars.rejected]: (state, action) => {

    }
  }
});

const carReducer = carSlice.reducer

export default carReducer
