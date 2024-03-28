import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import sanphamService from "./sanphamService";

export const getAllSanPhams = createAsyncThunk(
  "SanPhams/get",
  async (thunkAPI) => {
    try {
      return await sanphamService.getSanPhams();
    } catch (error) {
           return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getASanPhams = createAsyncThunk(
  "SanPhams/getASanPhams",
  async (maSP, thunkAPI) => {
    try {
      return await sanphamService.getSingleSanPhams(maSP);
    } catch (error) {
           return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const sanphamState = {
  SanPhams: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const sanphamSlice = createSlice({
  name: "sanpham",
  initialState: sanphamState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSanPhams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSanPhams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.SanPhams = action.payload;
      })
      .addCase(getAllSanPhams.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getASanPhams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASanPhams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getSingleSanPhams = action.payload;
        state.message = "San Phams Fetched Successfully!";
      })
      .addCase(getASanPhams.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      }); 
  },
});

export default sanphamSlice.reducer;