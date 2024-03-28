import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import loaispService from "./loaispService";

export const getLoaisps = createAsyncThunk(
  "loaisp/get-loaisps",
  async (thunkAPI) => {
    try {
      return await loaispService.getLoaisps();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createLoaisp = createAsyncThunk(
  "loaisp/create-loaisp",
  async (loaispData, thunkAPI) => {
    try {
      return await loaispService.createLoaisp(loaispData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALoaisp = createAsyncThunk(
  "loaisp/get-loaisp",
  async (maLSP, thunkAPI) => {
    try {
      return await loaispService.getLoaisp(maLSP);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALoaispad = createAsyncThunk(
  "loaisp/get-loaispad",
  async (maCH, thunkAPI) => {
    try {
      return await loaispService.getLoaispad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateALoaisp = createAsyncThunk(
  "loaisp/update-loaisp",
  async (loaispData, thunkAPI) => {
    try {
      return await loaispService.updateLoaisp(loaispData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteALoaisp = createAsyncThunk(
  "loaisp/delete-loaisp",
  async (maLSP, thunkAPI) => {
    try {
      return await loaispService.deleteLoaisp(maLSP);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Loaisps: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const loaispSlice = createSlice({
  name: "loaisp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoaisps.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoaisps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Loaisps = action.payload;
      })
      .addCase(getLoaisps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createLoaisp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLoaisp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdLoaisp = action.payload;
      })
      .addCase(createLoaisp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateALoaisp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateALoaisp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedLoaisp = action.payload;
      })
      .addCase(updateALoaisp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALoaisp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALoaisp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loaispTenLSP = action.payload.tenLSP;
        state.loaispMaLSP = action.payload.maLSP;
      })
      .addCase(getALoaisp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALoaispad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALoaispad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Loaisps = action.payload;
      })
      .addCase(getALoaispad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteALoaisp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteALoaisp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedLoaisp = action.payload.tenLSP;
      })
      .addCase(deleteALoaisp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default loaispSlice.reducer;