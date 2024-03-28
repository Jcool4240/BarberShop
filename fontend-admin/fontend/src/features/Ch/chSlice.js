import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import chService from "./chService";

export const getChs = createAsyncThunk(
  "ch/get-chs",
  async (thunkAPI) => {
    try {
      return await chService.getChs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCh = createAsyncThunk(
  "ch/create-ch",
  async (chData, thunkAPI) => {
    try {
      return await chService.createCh(chData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getACh = createAsyncThunk(
  "ch/get-ch",
  async (maCH, thunkAPI) => {
    try {
      return await chService.getCh(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateACh = createAsyncThunk(
  "ch/update-ch",
  async (chData, thunkAPI) => {
    try {
      return await chService.updateCh(chData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteACh = createAsyncThunk(
  "ch/delete-ch",
  async (maCH, thunkAPI) => {
    try {
      return await chService.deleteCh(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Chs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const chSlice = createSlice({
  name: "ch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Chs = action.payload;
      })
      .addCase(getChs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createCh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCh = action.payload;
      })
      .addCase(createCh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateACh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateACh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedCh = action.payload;
      })
      .addCase(updateACh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getACh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getACh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.chMaCH = action.payload.maCH;
        state.chTenCH = action.payload.tenCH;
        state.chEmail = action.payload.email;
        state.chSdt = action.payload.sdt;
        state.chDiaChi = action.payload.diaChi;
      })
      .addCase(getACh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteACh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteACh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCh = action.payload;
      })
      .addCase(deleteACh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default chSlice.reducer;