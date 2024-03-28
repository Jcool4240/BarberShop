import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import tctService from "./tctService";

export const getTctad = createAsyncThunk(
  "tct/get-tctad",
  async (maCN, thunkAPI) => {
    try {
      return await tctService.getTctad(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createTct = createAsyncThunk(
  "tct/create-tct",
  async (tctData, thunkAPI) => {
    try {
      return await tctService.createTct(tctData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getATct = createAsyncThunk(
  "tct/get-tct",
  async (maTCT, thunkAPI) => {
    try {
      return await tctService.getTct(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getATctad = createAsyncThunk(
  "tct/get-tctad",
  async (maCN, thunkAPI) => {
    try {
      return await tctService.getTctad(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateATct = createAsyncThunk(
  "tct/update-tct",
  async (tctData, thunkAPI) => {
    try {
      return await tctService.updateTct(tctData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteATct = createAsyncThunk(
  "tct/delete-tct",
  async (maTCT, thunkAPI) => {
    try {
      return await tctService.deleteTct(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getTcts = createAsyncThunk(
  "tct/get-tcts",
  async (thunkAPI) => {
    try {
      return await tctService.getTcts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");
const initialState = {
  Tcts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const tctSlice = createSlice({
  name: "tct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTctad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTctad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Tcts = action.payload;
      })
      .addCase(getTctad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;     
      })
      .addCase(getTcts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTcts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Tcts = action.payload;
      })
      .addCase(getTcts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default tctSlice.reducer;